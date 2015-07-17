

angular.module('agilekartV2').controller('EditLoyaltyProgramMerchantController', function($scope, $routeParams, $location, LoyaltyProgramMerchantResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.loyaltyProgramMerchant = new LoyaltyProgramMerchantResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/LoyaltyProgramMerchants");
        };
        LoyaltyProgramMerchantResource.get({LoyaltyProgramMerchantId:$routeParams.LoyaltyProgramMerchantId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.loyaltyProgramMerchant);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.loyaltyProgramMerchant.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/LoyaltyProgramMerchants");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/LoyaltyProgramMerchants");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.loyaltyProgramMerchant.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});