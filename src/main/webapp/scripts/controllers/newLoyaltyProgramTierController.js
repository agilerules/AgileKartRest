
angular.module('agileKartRest').controller('NewLoyaltyProgramTierController', function ($scope, $location, locationParser, LoyaltyProgramTierResource , UserRewardsResource, LoyaltyEventDetailsResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.loyaltyProgramTier = $scope.loyaltyProgramTier || {};
    
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
            $scope.loyaltyProgramTier.userRewardses = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.rewardId = selectedItem.value;
                $scope.loyaltyProgramTier.userRewardses.push(collectionItem);
            });
        }
    });
    
    $scope.loyaltyEventDetailsesList = LoyaltyEventDetailsResource.queryAll(function(items){
        $scope.loyaltyEventDetailsesSelectionList = $.map(items, function(item) {
            return ( {
                value : item.loyaltyEventDetailsId,
                text : item.loyaltyEventDetailsId
            });
        });
    });
    $scope.$watch("loyaltyEventDetailsesSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.loyaltyProgramTier.loyaltyEventDetailses = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.loyaltyEventDetailsId = selectedItem.value;
                $scope.loyaltyProgramTier.loyaltyEventDetailses.push(collectionItem);
            });
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/LoyaltyProgramTiers/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        LoyaltyProgramTierResource.save($scope.loyaltyProgramTier, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/LoyaltyProgramTiers");
    };
});