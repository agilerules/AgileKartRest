

angular.module('agilekartV2').controller('EditLoyaltyProgramTierController', function($scope, $routeParams, $location, LoyaltyProgramTierResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.loyaltyProgramTier = new LoyaltyProgramTierResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/LoyaltyProgramTiers");
        };
        LoyaltyProgramTierResource.get({LoyaltyProgramTierId:$routeParams.LoyaltyProgramTierId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.loyaltyProgramTier);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.loyaltyProgramTier.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/LoyaltyProgramTiers");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/LoyaltyProgramTiers");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.loyaltyProgramTier.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});