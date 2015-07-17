
angular.module('agilekartV2').controller('NewLoyaltyProgramTierController', function ($scope, $location, locationParser, LoyaltyProgramTierResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.loyaltyProgramTier = $scope.loyaltyProgramTier || {};
    

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