

angular.module('agilekartV2').controller('EditMerchantCategoryController', function($scope, $routeParams, $location, MerchantCategoryResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.merchantCategory = new MerchantCategoryResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/MerchantCategories");
        };
        MerchantCategoryResource.get({MerchantCategoryId:$routeParams.MerchantCategoryId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.merchantCategory);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.merchantCategory.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/MerchantCategories");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/MerchantCategories");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.merchantCategory.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});