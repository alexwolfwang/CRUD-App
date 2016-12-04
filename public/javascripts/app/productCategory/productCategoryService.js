/**
 * Created by Alex.W on 2016/12/4.
 */
angular.module('productCategoryModule')
    .factory('productCategoryService',productCategoryService);


productCategoryService.$inject = ['$http'];

function productCategoryService($scope) {

    return {

        createProductCategory : function(productCategory) {

            return $http.post('/createProductCategory',
                {
                    categoryName: productCategoryName,
                    details: productCategory.categoryDetails
                }
            );
        }
    }
}