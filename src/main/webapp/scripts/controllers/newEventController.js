
angular.module('agileKartRest').controller('NewEventController', function ($scope, $location, locationParser, EventResource , LoyaltyEventDetailsResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.event = $scope.event || {};
    
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
            $scope.event.loyaltyEventDetailses = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.loyaltyEventDetailsId = selectedItem.value;
                $scope.event.loyaltyEventDetailses.push(collectionItem);
            });
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Events/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        EventResource.save($scope.event, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Events");
    };
});