

angular.module('agilekartV2').controller('EditPaymentGatewayController', function($scope, $routeParams, $location, PaymentGatewayResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.paymentGateway = new PaymentGatewayResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/PaymentGateways");
        };
        PaymentGatewayResource.get({PaymentGatewayId:$routeParams.PaymentGatewayId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.paymentGateway);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.paymentGateway.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/PaymentGateways");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/PaymentGateways");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.paymentGateway.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});