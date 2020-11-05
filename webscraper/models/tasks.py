from itertools import product
from operator import itemgetter

from flask_restful import marshal
from webscraper.models.products import ProductModel

from webscraper.models.products import ProductModel
from webscraper.utility.utils import db, add_to_database, get_from_database


class TaskModel(db.Model):
    __tablename__ = "tasks"
    id = db.Column(db.Integer, primary_key=True)
    product = db.Column(db.Integer, db.ForeignKey("products.id"), unique=True)
    price_limit = db.Column(db.Float)
    purchase = db.Column(db.Boolean, default=False)
    notify_on_available = db.Column(db.Boolean, default=True)
    profile = db.Column(db.Integer, db.ForeignKey("profiles.id"))
    current_price = db.Column(db.Float)

    def add_to_database(self, **kwargs):
        print(self.product)
        product_id = self.product
        if type(self.product) is not int:
            product_id = self.product.toDict()["id"]
        return add_to_database(
            self,
            TaskModel.query.filter_by(product=product_id).first(),
            **kwargs,
        )

    def toDict(self):
        print(self.product)
        product = get_from_database(ProductModel, id=int(self.product))
        productDict = product.__dict__
        productDict.pop("_sa_instance_state")
        dict = self.__dict__
        dict["product"] = productDict
        dict.pop("_sa_instance_state")
        return dict
