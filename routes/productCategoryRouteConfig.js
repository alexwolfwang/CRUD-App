/**
 * Created by Alex.W on 2016/12/3.
 */
function productCategoryRouteConfig(app) {

    this.app = app;
    this.routeTable = [];
    this.init();
}


productCategoryRouteConfig.prototype.init = function () {

    var self = this;

    this.addRoutes();
    this.processRoutes();


}

productCategoryRouteConfig.prototype.processRoutes = function () {

    var self = this;

    self.routeTable.forEach(function (route) {

        if (route.requestType == 'get') {
            console.log("test123");
            console.log(route);
            self.app.get(route.requestUrl, route.callbackFunction);
        }
        else if (route.requestType == 'post') {

            console.log(route);
            self.app.post(route.requestUrl, route.callbackFunction);
        }
        else if (route.requestType == 'delete') {

            console.log(route);
            self.app.delete(route.requestUrl, route.callbackFunction);
        }

    });
}

productCategoryRouteConfig.prototype.addRoutes = function() {
    var self = this;

    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/createProductCategory',
        callbackFunction : function (request, response) {

            response.render('createProductCategory', { title : "Create Product Category" });
        }
    });

    self.routeTable.push( {
        requestType: 'get',
        requestUrl: '/viewProductCategory',
        callbackFunction: function(request, response) {
            response.render('viewProductCategory', {title: "View Product Category"})
        }
    })


};


module.exports = productCategoryRouteConfig;