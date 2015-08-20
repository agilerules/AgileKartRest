
angular.module('agileKartRest').controller('NewMerchantPaymentGatewayController', function ($scope, $location, locationParser, MerchantPaymentGatewayResource , MerchantResource, PaymentGatewayResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.merchantPaymentGateway = $scope.merchantPaymentGateway || {};
    
    $scope.merchantList = MerchantResource.queryAll(function(items){
        $scope.merchantSelectionList = $.map(items, function(item) {
            return ( {
                value : item.merchantId,
                text : item.merchantId
            });
        });
    });
    $scope.$watch("merchantSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.merchantPaymentGateway.merchant = {};
            $scope.merchantPaymentGateway.merchant.merchantId = selection.value;
        }
    });
    
    $scope.paymentGatewayList = PaymentGatewayResource.queryAll(function(items){
        $scope.paymentGatewaySelectionList = $.map(items, function(item) {
            return ( {
                value : item.paymentGatewayId,
                text : item.paymentGatewayId
            });
        });
    });
    $scope.$watch("paymentGatewaySelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.merchantPaymentGateway.paymentGateway = {};
            $scope.merchantPaymentGateway.paymentGateway.paymentGatewayId = selection.value;
        }
    });
    

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