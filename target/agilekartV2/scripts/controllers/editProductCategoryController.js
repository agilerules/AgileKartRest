

angular.module('agilekartV2').controller('EditProductCategoryController', function($scope, $routeParams, $location, ProductCategoryResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.productCategory = new ProductCategoryResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/ProductCategories");
        };
        ProductCategoryResource.get({ProductCategoryId:$routeParams.ProductCategoryId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.productCategory);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.productCategory.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/ProductCategories");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/ProductCategories");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.productCategory.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});