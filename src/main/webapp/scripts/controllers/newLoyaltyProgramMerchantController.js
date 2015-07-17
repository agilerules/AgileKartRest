
angular.module('agilekartV2').controller('NewLoyaltyProgramMerchantController', function ($scope, $location, locationParser, LoyaltyProgramMerchantResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.loyaltyProgramMerchant = $scope.loyaltyProgramMerchant || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/LoyaltyProgramMerchants/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        LoyaltyProgramMerchantResource.save($scope.loyaltyProgramMerchant, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/LoyaltyProgramMerchants");
    };
});