
angular.module('agileKartRest').controller('NewLoyaltyEventDetailsController', function ($scope, $location, locationParser, LoyaltyEventDetailsResource , EventResource, LoyaltyProgramTierResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.loyaltyEventDetails = $scope.loyaltyEventDetails || {};
    
    $scope.eventList = EventResource.queryAll(function(items){
        $scope.eventSelectionList = $.map(items, function(item) {
            return ( {
                value : item.eventId,
                text : item.eventId
            });
        });
    });
    $scope.$watch("eventSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.loyaltyEventDetails.event = {};
            $scope.loyaltyEventDetails.event.eventId = selection.value;
        }
    });
    
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
            $scope.loyaltyEventDetails.loyaltyProgramTier = {};
            $scope.loyaltyEventDetails.loyaltyProgramTier.tierId = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/LoyaltyEventDetails/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        LoyaltyEventDetailsResource.save($scope.loyaltyEventDetails, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/LoyaltyEventDetails");
    };
});