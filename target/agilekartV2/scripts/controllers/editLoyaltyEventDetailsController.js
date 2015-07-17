

angular.module('agilekartV2').controller('EditLoyaltyEventDetailsController', function($scope, $routeParams, $location, LoyaltyEventDetailsResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.loyaltyEventDetails = new LoyaltyEventDetailsResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/LoyaltyEventDetails");
        };
        LoyaltyEventDetailsResource.get({LoyaltyEventDetailsId:$routeParams.LoyaltyEventDetailsId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.loyaltyEventDetails);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.loyaltyEventDetails.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/LoyaltyEventDetails");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/LoyaltyEventDetails");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.loyaltyEventDetails.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});