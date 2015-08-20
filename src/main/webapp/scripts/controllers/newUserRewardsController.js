
angular.module('agileKartRest').controller('NewUserRewardsController', function ($scope, $location, locationParser, UserRewardsResource , LoyaltyProgramTierResource, OrdersResource, UsersResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.userRewards = $scope.userRewards || {};
    
    $scope.loyaltyProgramTierList = LoyaltyProgramTierResource.queryAll(function(items){
        $scope.loyaltyProgramTierSelectionList = $.map(items, function(item) {
            return ( {
                value : item.tierId,
                text : item.tierId
            });
        });
    });
    $scope.$watch("loyaltyProgramTierSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.userRewards.loyaltyProgramTier = {};
            $scope.userRewards.loyaltyProgramTier.tierId = selection.value;
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
            $scope.userRewards.orders = {};
            $scope.userRewards.orders.orderId = selection.value;
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
            $scope.userRewards.users = {};
            $scope.userRewards.users.userId = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/UserRewards/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        UserRewardsResource.save($scope.userRewards, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/UserRewards");
    };
});