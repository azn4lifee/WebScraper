from datetime import datetime
from webscraper.models.bestbuy import BestBuy, BestBuyCheckOut
from webscraper.models.cc import CanadComputersCheckout, CanadaComputers
from webscraper.models.profiles import Address, ShoppingProfile, CreditCard
import regex, logging, requests, json, random
from enum import Enum
import requests, json
from bs4 import BeautifulSoup
import time, lxml
from Crypto.PublicKey import RSA


# class Sites(Enum):
#     bestbuy = BestBuy
#     cc = CanadaComputers


# item = Sites.bestbuy.value(
#     "https://www.bestbuy.ca/en-ca/product/nintendo-switch-console-with-neon-red-blue-joy-con/13817625"
# )

profile = ShoppingProfile(
    email="anthonyma940603@gmail.com",
    actEmail="anthonyma940603@gmail.com",
    actPassword="8290F9AF",
    shippingAddress=Address(
        address="3692 Water St",
        city="Kitchener",
        firstName="Test",
        lastName="Test",
        phoneNumber="2894439715",
        province="ON",
        postalCode="N2H5A5",
    ),
    creditCard=CreditCard(
        firstName="Test",
        lastName="Test",
        creditCardNumber="4263982640269299",
        cvv="837",
        expMonth="2",
        expYear="2023",
        type="VISA",
        billingAddress=Address(
            address="3692 Water St",
            city="Kitchener",
            firstName="Test",
            lastName="Test",
            phoneNumber="2894439715",
            province="ON",
            postalCode="N2H5A5",
        ),
    ),
)

# itemStart = time.perf_counter()
# item = CanadaComputers(
#     "https://www.canadacomputers.com/product_info.php?cPath=238_1092&item_id=171985"
# )
# itemTotal = time.perf_counter() - itemStart
# print(f"Item time: {itemTotal}s")


# checkoutStart = time.perf_counter()
# checkout = CanadComputersCheckout(profile=profile, item=item)
# checkoutTotal = time.perf_counter() - checkoutStart
# print(f"Checkout time: {checkoutTotal}s")

# # sidStart = time.perf_counter()
# # checkout.getSID()
# # sidTotal = time.perf_counter() - sidStart
# # print(f"SID time: {sidTotal}s")

# loginStart = time.perf_counter()
# res = checkout.login()
# loginTotal = time.perf_counter() - loginStart
# print(f"Login time: {loginTotal}s")

# deleteStart = time.perf_counter()
# checkout.deleteCart()
# deleteTotal = time.perf_counter() - deleteStart
# print(f"Delete time: {deleteTotal}s")

# atcStart = time.perf_counter()
# res = checkout.atc()
# atcTotal = time.perf_counter() - atcStart
# print(f"ATC time: {atcTotal}s")

# shippingStart = time.perf_counter()
# res = checkout.shipping()
# shippingTotal = time.perf_counter() - shippingStart
# print(f"Shipping time: {shippingTotal}s")

# deliveryStart = time.perf_counter()
# checkout.delivery()
# deliveryTotal = time.perf_counter() - deliveryStart
# print(f"Delivery time: {deliveryTotal}s")

# paymentStart = time.perf_counter()
# checkout.payment()
# paymentTotal = time.perf_counter() - paymentStart
# print(f"Payment time: {paymentTotal}s")

# reviewStart = time.perf_counter()
# checkout.review()
# reviewTotal = time.perf_counter() - reviewStart
# print(f"Review time: {reviewTotal}s")

# monerisStart = time.perf_counter()
# res = checkout.moneris()
# monerisTotal = time.perf_counter() - monerisStart
# print(f"Moneris time: {monerisTotal}s")

# with open("test.json", "w") as f:
#     f.write(res.json())