
angular.module('agileKartRest').controller('NewLoyaltyProgramMerchantController', function ($scope, $location, locationParser, LoyaltyProgramMerchantResource , MerchantResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.loyaltyProgramMerchant = $scope.loyaltyProgramMerchant || {};
    
    $scope.merchantList = MerchantResource.queryAll(function(items){
        $scope.merchantSelectionList = $.map(items, function(item) {
            return ( {
                value : item.merchantId,
                text : item.merchantId
            });
        });
    });
    $scope.$watch("merchantSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.loyaltyProgramMerchant.merchant = {};
            $scope.loyaltyProgramMerchant.merchant.merchantId = selection.value;
        }
    });
    

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