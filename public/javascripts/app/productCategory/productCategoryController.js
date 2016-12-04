/**
 * Created by Alex.W on 2016/12/4.
 */
angular.module('productCategoryModule')
    .controller('productCategoryController',productCategoryController);

productCategoryController.$inject = ['$scope','$timeout','productCategoryService'];


function productCategoryController($scope,$timeout, productCategoryService){

    $scope.productCategory = {

        categoryName : '',
        categoryDetails : ''

    };


    $scope.createProductCategory = function(productCategory) {
        productCategoryService.createProductCategory(productCategory)
            .success(function(data) {


                //$timeout(function() {
                //
                //}, 3000)
            })
    }
};