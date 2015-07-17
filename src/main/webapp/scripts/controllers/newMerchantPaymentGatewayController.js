
angular.module('agilekartV2').controller('NewMerchantPaymentGatewayController', function ($scope, $location, locationParser, MerchantPaymentGatewayResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.merchantPaymentGateway = $scope.merchantPaymentGateway || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/MerchantPaymentGateways/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        MerchantPaymentGatewayResource.save($scope.merchantPaymentGateway, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/MerchantPaymentGateways");
    };
});