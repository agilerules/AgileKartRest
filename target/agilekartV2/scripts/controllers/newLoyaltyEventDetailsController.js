
angular.module('agilekartV2').controller('NewLoyaltyEventDetailsController', function ($scope, $location, locationParser, LoyaltyEventDetailsResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.loyaltyEventDetails = $scope.loyaltyEventDetails || {};
    

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