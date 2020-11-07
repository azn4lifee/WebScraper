import os, threading, time
from webscraper.flask import app
from threading import Thread
from sqlalchemy.exc import DatabaseError
from webscraper.models.profiles import ProfileModel, ShoppingProfile
from webscraper.utility.utils import (
    add_to_database,
    get_from_database,
    update_database,
    delete_from_database,
)
from webscraper.models.products import ProductModel
from webscraper.models.tasks import TaskModel
from win10toast import ToastNotifier
from webscraper.models.bestbuy import BestBuy, BestBuyCheckOut
from webscraper.models.cc import CanadaComputers, CanadaComputersCheckout


class MonitorThread(Thread):
    def __init__(self):
        super().__init__()
        self.tn = ToastNotifier()
        self.bb = "bestbuy"
        self.cc = "canadacomputer"
        self._stopevent = False
        self.cache = {}
        try:
            with app.app_context():
                self.tasks = get_from_database(TaskModel)
        except DatabaseError:
            print("Almost made it, error ")
        self.previousState = []

    # def getProfileDB(self, profileID):
    #     return get_from_database(ProfileModel, profileID)

    # def getProduct(self, productID) -> ProductModel:
    #     return get_from_database(ProductModel, productID)

    def retryTransaction(self, shopper):
        count = 0
        purchased = False
        results = None
        while purchased == False or count < 3:
            print(f"purchase attempt {count + 1}")
            try:
                shopper.reset()
                results = shopper.checkout()
            except Exception as e:
                print(f"Exception when checking out: {e}")
                count += 1
            purchased = True
        return results

    def iterTasks(self):
        for task in self.tasks:
            print(f"Iterating over task {task.id}")
            # time.sleep(10)
            if task.completed:
                continue

            if task.id not in self.cache:
                product = get_from_database(ProductModel, **{"id": task.product})
                supplier = BestBuy if self.bb in product.url else CanadaComputers

                controller = supplier(product.url)
                self.cache["id"] = controller
            else:
                controller = self.cache["id"]

            newPrice = controller.getCurrentPrice()

            if task.current_price is None or newPrice != task.current_price:
                self.tn.show_toast(
                    f"{controller.name} Price Updated",
                    f"{controller.name} changed from ${task.current_price} to ${newPrice}",
                    icon_path="webscraper\\flask\\favicon.ico",
                )
                update_database(TaskModel, task.id, current_price=newPrice)

            if newPrice <= task.price_limit:
                if (
                    task.purchase
                    and controller.getAvailability()
                    and not task.completed
                ):
                    # time.sleep(10)
                    sp = ShoppingProfile.fromDB(
                        get_from_database(ProfileModel, **{"id": task.profile})
                    )
                    shopper = (
                        BestBuyCheckOut(profile=sp, item=controller)
                        if type(controller) is BestBuy
                        else CanadaComputersCheckout(profile=sp, item=controller)
                    )

                    purchase_attempts = 0
                    order_ID = None
                    credit_failed = False

                    while not task.completed and purchase_attempts < 3:
                        try:
                            order_ID = shopper.checkout()
                            if not order_ID:
                                raise Exception
                            task.completed = True
                        except Exception as e:
                            print(f"Exception when checking out: {e}")
                            purchase_attempts += 1
                            if e == 400:
                                task.completed = True
                            else:
                                shopper.reset()
                                time.sleep(2)  # To mitigate timeout errors

                    if order_ID:
                        checkMssg = f"Successfully purchased {controller.name} from {' Best Buy' if type(controller) is BestBuy else ' Canada Computers'}. Your order number is {order_ID}"
                    else:
                        if credit_failed:
                            checkMssg = f"Transaction Failed: Credit Card Failed. \n Please check card profile information on profile for {sp.email}"
                        else:
                            checkMssg = f"Transaction Failed: An unknown error occured."
                        order_ID = "N/A"

                    self.tn.show_toast(
                        f"Purchase Update for {controller.name}",
                        checkMssg,
                        icon_path="webscraper\\flask\\favicon.ico",
                    )

                    update_database(
                        TaskModel, task.id, completed=True, order_id=str(order_ID)
                    )

    def join(self, timeout=None):
        """ Stop the thread. """
        print(f"closing thread {threading.get_ident()} ")
        self._stopevent.set()
        Thread.join(self, timeout)

    def run(self):
        print(f"starting thread {threading.get_ident()} ")
        # print("print Thread is running POG")
        # print(list(map(lambda x: x.__dict__, self.tasks)))
        interval = os.getenv("SCRAPE_INTERVAL") or 5
        while True:
            with app.app_context():
                self.tasks = get_from_database(TaskModel)
                self.iterTasks()
                time.sleep(int(interval))

            # self.tn.show_toast("Update from Scraper", "big ol message", icon_path="webscraper\\flask\\favicon.ico")

    # def updateItems(self, itemQueue):
    #     while not itemQueue.empty():
    #         self.items.append(itemQueue.get())
    #         itemQueue.task_done()

    # def isUnderPrice(self, item):
    #     return item.getCurrentPrice() <= item.price_limit

    # def isAvailable(self, item):
    #     return item.getAvailability()

    # def run(self):

    #     while True:
    #         for item in self.items:
    #             price = item.getCurrentPrice()
    #             availability = item.getAvailability()

    #             print(f"{item.name}: ${price}")

    #             # if price <= self.priceLimit and availability:
    #             #     # notify

    #             #     if self.purchase:
    #             #         while True:
    #             #             pass
    #             #             # create checkout object
    #             #             # purchase
    #             #     break

    #             time.sleep(1)


#     def __repr__(self) -> str:
#         return str(self.__dict__)


# def testFunction():


#     monitor = MonitorThread()