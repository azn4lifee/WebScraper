from webscraper.models.products import ProductModel
from webscraper.flask import api, app
from webscraper.flask.routes import TaskApi, bp
from webscraper.flask.routes import HistoryApi, ProductApi, ProfileApi
from webscraper.flask.monitor import MonitorThread
from webscraper.utility.utils import db, add_to_database, get_from_database
if __name__ == "__main__":

    api.add_resource(
        ProductApi,
        "/api/product",
        "/api/product/<int:product_id>",
        "/api/products",
        "/api/products/<int:product_id>",
    )
    api.add_resource(
        ProfileApi,
        "/api/profile",
        "/api/profile/<int:id>",
        "/api/profiles",
        "/api/profiles/<int:id>",
    )
    
    api.add_resource(HistoryApi, "/api/history", "/api/history/<int:id>")
    api.add_resource(TaskApi, "/api/task", "/api/tasks")
    app.register_blueprint(bp)
    # mt = MonitorThread()
    # mt.run()

    # mt = MonitorThread()
    # # get_from_database(ProductModel)
    # mt.start()
    mt1 = MonitorThread()
    # # get_from_database(ProductModel)
    mt1.start()
    app.run()
    print("uh oh scoobs")
   