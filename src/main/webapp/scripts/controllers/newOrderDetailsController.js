
angular.module('agileKartRest').controller('NewOrderDetailsController', function ($scope, $location, locationParser, OrderDetailsResource , OrdersResource, ProductResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.orderDetails = $scope.orderDetails || {};
    
    $scope.ordersList = OrdersResource.queryAll(function(items){
        $scope.ordersSelectionList = $.map(items, function(item) {
            return ( {
                value : item.orderId,
                text : item.orderId
            });
        });
    });
    $scope.$watch("ordersSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.orderDetails.orders = {};
            $scope.orderDetails.orders.orderId = selection.value;
        }
    });
    
    $scope.productList = ProductResource.queryAll(function(items){
        $scope.productSelectionList = $.map(items, function(item) {
            return ( {
                value : item.productId,
                text : item.productId
            });
        });
    });
    $scope.$watch("productSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.orderDetails.product = {};
            $scope.orderDetails.product.productId = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/OrderDetails/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        OrderDetailsResource.save($scope.orderDetails, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/OrderDetails");
    };
});