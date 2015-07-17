

angular.module('agilekartV2').controller('EditProductOptionController', function($scope, $routeParams, $location, ProductOptionResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.productOption = new ProductOptionResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/ProductOptions");
        };
        ProductOptionResource.get({ProductOptionId:$routeParams.ProductOptionId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.productOption);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.productOption.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/ProductOptions");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/ProductOptions");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.productOption.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});