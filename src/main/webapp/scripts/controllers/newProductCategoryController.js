
angular.module('agileKartRest').controller('NewProductCategoryController', function ($scope, $location, locationParser, ProductCategoryResource , CategoryResource, ProductResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.productCategory = $scope.productCategory || {};
    
    $scope.categoryList = CategoryResource.queryAll(function(items){
        $scope.categorySelectionList = $.map(items, function(item) {
            return ( {
                value : item.categoryId,
                text : item.categoryId
            });
        });
    });
    $scope.$watch("categorySelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.productCategory.category = {};
            $scope.productCategory.category.categoryId = selection.value;
        }
    });
    
    $scope.productList = ProductResource.queryAll(function(items){
        $scope.productSelectionList = $.map(items, function(item) {
            return ( {
                value : item.productId,
                text : item.productId
            });
        });
    });
    $scope.$watch("productSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.productCategory.product = {};
            $scope.productCategory.product.productId = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/ProductCategories/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        ProductCategoryResource.save($scope.productCategory, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/ProductCategories");
    };
});