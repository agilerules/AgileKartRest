
angular.module('agilekartV2').controller('NewPaymentGatewayController', function ($scope, $location, locationParser, PaymentGatewayResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.paymentGateway = $scope.paymentGateway || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/PaymentGateways/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        PaymentGatewayResource.save($scope.paymentGateway, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/PaymentGateways");
    };
});