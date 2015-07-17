

angular.module('agilekartV2').controller('EditMerchantAddressController', function($scope, $routeParams, $location, MerchantAddressResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.merchantAddress = new MerchantAddressResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/MerchantAddresses");
        };
        MerchantAddressResource.get({MerchantAddressId:$routeParams.MerchantAddressId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.merchantAddress);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.merchantAddress.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/MerchantAddresses");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/MerchantAddresses");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.merchantAddress.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});