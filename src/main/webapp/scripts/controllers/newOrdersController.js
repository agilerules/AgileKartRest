
angular.module('agileKartRest').controller('NewOrdersController', function ($scope, $location, locationParser, OrdersResource , PaymentGatewayResource, UsersResource, OrderStatusResource, OrderDetailsResource, UserRewardsResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.orders = $scope.orders || {};
    
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
            $scope.orders.paymentGateway = {};
            $scope.orders.paymentGateway.paymentGatewayId = selection.value;
        }
    });
    
    $scope.usersList = UsersResource.queryAll(function(items){
        $scope.usersSelectionList = $.map(items, function(item) {
            return ( {
                value : item.userId,
                text : item.userId
            });
        });
    });
    $scope.$watch("usersSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.orders.users = {};
            $scope.orders.users.userId = selection.value;
        }
    });
    
    $scope.orderStatusesList = OrderStatusResource.queryAll(function(items){
        $scope.orderStatusesSelectionList = $.map(items, function(item) {
            return ( {
                value : item.orderStatusId,
                text : item.orderStatusId
            });
        });
    });
    $scope.$watch("orderStatusesSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.orders.orderStatuses = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.orderStatusId = selectedItem.value;
                $scope.orders.orderStatuses.push(collectionItem);
            });
        }
    });
    
    $scope.orderDetailsesList = OrderDetailsResource.queryAll(function(items){
        $scope.orderDetailsesSelectionList = $.map(items, function(item) {
            return ( {
                value : item.detailId,
                text : item.detailId
            });
        });
    });
    $scope.$watch("orderDetailsesSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.orders.orderDetailses = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.detailId = selectedItem.value;
                $scope.orders.orderDetailses.push(collectionItem);
            });
        }
    });
    
    $scope.userRewardsesList = UserRewardsResource.queryAll(function(items){
        $scope.userRewardsesSelectionList = $.map(items, function(item) {
            return ( {
                value : item.rewardId,
                text : item.rewardId
            });
        });
    });
    $scope.$watch("userRewardsesSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.orders.userRewardses = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.rewardId = selectedItem.value;
                $scope.orders.userRewardses.push(collectionItem);
            });
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Orders/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        OrdersResource.save($scope.orders, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Orders");
    };
});