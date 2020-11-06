import json, random, regex
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
from sqlalchemy import and_

db = SQLAlchemy()

BEST_BUY = {
    "currentPriceDivAttr": {"class": regex.compile("^pricingContainer")},
    "regularPriceDivAttr": {"class": regex.compile("^pricingContainer")},
    "titleDivAttr": {"class": "x-product-detail-page"},
    "currentPriceAttr": {"itemprop": "price"},
    "regularPriceAttr": {"class": regex.compile(r"^productSaving")},
    "titleAttr": {"class": regex.compile("^productName")},
}

AMAZON = {
    "currentPriceDivAttr": {"id": "price"},
    "regularPriceDivAttr": {"id": "price"},
    "titleDivAttr": {"id": "titleSection"},
    "currentPriceAttr": {
        "id": regex.compile(r"^priceblock_ourprice$|^priceblock_dealprice$")
    },
    "regularPriceAttr": {"class": "priceBlockStrikePriceString"},
    "titleAttr": {"id": "title"},
}

CANADACOMPUTERS = {
    "currentPriceDivAttr": {"class": "page-product_info"},
    "regularPriceDivAttr": {"class": "page-product_info"},
    "titleDivAttr": {"class": "page-product_info"},
    "availabilityDivAttr": {"class": "page-product_info"},
    "imageDivAttr": {"class": "page-product_info"},
    "currentPriceAttr": {"class": "h2-big"},
    "regularPriceAttr": {"class": "h3 text-nowrap mb-0"},
    "titleAttr": {"class": "h3 mb-0"},
    "availabilityAttr": {"id": "btn-addCart"},
    "imageAttr": {"id": "pi-prod-img-lrg"},
}

PROVINCES = {
    "Alberta": "AB",
    "British Columbia": "BC",
    "Manitoba": "MB",
    "New Brunswick": "NB",
    "Newfoundland and Labrador": "NL",
    "Northwest Territories": "NT",
    "Nova Scotia": "NS",
    "Nunavut": "NU",
    "Ontario": "ON",
    "Prince Edward Island": "PE",
    "Quebec": "QC",
    "Saskatchewan": "SK",
    "Yukon": "YT",
}


def add_to_database(item, func, **kwargs):
    """
    Adds given item to database

    Args:
        item (Model): Any Flask-SQLAlchemy model item
        func (function): Query function if item is already in database

    Kwargs:
        silent (Boolean): Whether to throw IntegrityError

    Raises:
        e: IntegrityError if silent is false

    Returns:
        Model: The item that is either added to database or queried from func
    """

    if item.id:
        if type(item).query.get(item.id):
            if "silent" in kwargs and not kwargs["silent"]:
                raise IntegrityError("Item already exists.")
            return item

    try:
        db.session.add(item)
        db.session.commit()
    except IntegrityError as e:
        db.session.rollback()
        # db.session.flush()
        if kwargs.get("silent") == False:
            raise e
        item = func
    return item


def get_from_database(type, **kwargs):
    """
    Retrieves item from database

    Args:
        type (Model): Any Flask-SQLAlchemy model class

    Kwargs:
        Any kwargs is valid given it is a valid query for the class
        id (Any): id of item to retrieve
        filter (function): query function to call for item

    Raises:
        e: AttributeError if given kwargs does not exist for class

    Returns:
        Model: item based on given kwarg queries
    """
    if not kwargs:
        return type.query.all()
    if kwargs.get("id"):
        return type.query.get(kwargs["id"])
    if kwargs.get("filter"):
        return type.query.filter(kwargs["filter"]).all()
    else:
        try:
            funcs = []
            for key, value in kwargs.items():
                if key == "filter":
                    continue
                funcs.append(getattr(type, key) == value)
        except AttributeError as e:
            raise e

        return type.query.filter(and_(*funcs)).all()


def update_database(type, id, **kwargs):
    """
    Updates item in database

    Args:
        type (Model): Any Flask-SQLAlchemy model class
        id (Int | Str): The ID of the item to change

    Kwargs:
        Any attributes to update

    Raises:
        e: Any exception given when trying to update item

    Returns:
        Model: Updated item
    """
    changed = False
    old = get_from_database(type, id=id)

    try:
        for key in kwargs:
            if str(getattr(old, key)) != str(kwargs[key]):
                setattr(old, key, kwargs[key])
                changed = True

        if changed:
            db.session.commit()
    except Exception as e:
        raise e

    return old


def delete_from_database(type, id, **kwargs):
    try:
        item = type.query.get(id)

        db.session.delete(item)
        db.session.commit()
    except Exception as e:
        if kwargs.get("silent") == False:
            raise e
        pass


def getUA():
    try:
        with open("user-agents.json", "r") as f:
            x = json.load(f)
            ua = x[random.randint(0, len(x) - 1)]
    except:
        ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36"

    return ua