

angular.module('agilekartV2').controller('EditMerchantPaymentGatewayController', function($scope, $routeParams, $location, MerchantPaymentGatewayResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.merchantPaymentGateway = new MerchantPaymentGatewayResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/MerchantPaymentGateways");
        };
        MerchantPaymentGatewayResource.get({MerchantPaymentGatewayId:$routeParams.MerchantPaymentGatewayId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.merchantPaymentGateway);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.merchantPaymentGateway.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/MerchantPaymentGateways");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/MerchantPaymentGateways");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.merchantPaymentGateway.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});