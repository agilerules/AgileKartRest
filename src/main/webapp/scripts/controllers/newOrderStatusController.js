
angular.module('agileKartRest').controller('NewOrderStatusController', function ($scope, $location, locationParser, OrderStatusResource , OrderStatusDescResource, OrdersResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.orderStatus = $scope.orderStatus || {};
    
    $scope.orderStatusDescList = OrderStatusDescResource.queryAll(function(items){
        $scope.orderStatusDescSelectionList = $.map(items, function(item) {
            return ( {
                value : item.orderStatusDescId,
                text : item.orderStatusDescId
            });
        });
    });
    $scope.$watch("orderStatusDescSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.orderStatus.orderStatusDesc = {};
            $scope.orderStatus.orderStatusDesc.orderStatusDescId = selection.value;
        }
    });
    
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
            $scope.orderStatus.orders = {};
            $scope.orderStatus.orders.orderId = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/OrderStatuses/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        OrderStatusResource.save($scope.orderStatus, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/OrderStatuses");
    };
});