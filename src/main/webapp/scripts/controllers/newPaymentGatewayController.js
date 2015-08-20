
angular.module('agileKartRest').controller('NewPaymentGatewayController', function ($scope, $location, locationParser, PaymentGatewayResource , MerchantPaymentGatewayResource, OrdersResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.paymentGateway = $scope.paymentGateway || {};
    
    $scope.merchantPaymentGatewaysList = MerchantPaymentGatewayResource.queryAll(function(items){
        $scope.merchantPaymentGatewaysSelectionList = $.map(items, function(item) {
            return ( {
                value : item.merchantPaymentGatewayId,
                text : item.merchantPaymentGatewayId
            });
        });
    });
    $scope.$watch("merchantPaymentGatewaysSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.paymentGateway.merchantPaymentGateways = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.merchantPaymentGatewayId = selectedItem.value;
                $scope.paymentGateway.merchantPaymentGateways.push(collectionItem);
            });
        }
    });
    
    $scope.ordersesList = OrdersResource.queryAll(function(items){
        $scope.ordersesSelectionList = $.map(items, function(item) {
            return ( {
                value : item.orderId,
                text : item.orderId
            });
        });
    });
    $scope.$watch("ordersesSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.paymentGateway.orderses = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.orderId = selectedItem.value;
                $scope.paymentGateway.orderses.push(collectionItem);
            });
        }
    });
    

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