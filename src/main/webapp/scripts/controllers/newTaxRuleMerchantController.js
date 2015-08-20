
angular.module('agileKartRest').controller('NewTaxRuleMerchantController', function ($scope, $location, locationParser, TaxRuleMerchantResource , MerchantResource, TaxRuleResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.taxRuleMerchant = $scope.taxRuleMerchant || {};
    
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
            $scope.taxRuleMerchant.merchant = {};
            $scope.taxRuleMerchant.merchant.merchantId = selection.value;
        }
    });
    
    $scope.taxRuleList = TaxRuleResource.queryAll(function(items){
        $scope.taxRuleSelectionList = $.map(items, function(item) {
            return ( {
                value : item.taxRuleId,
                text : item.taxRuleId
            });
        });
    });
    $scope.$watch("taxRuleSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.taxRuleMerchant.taxRule = {};
            $scope.taxRuleMerchant.taxRule.taxRuleId = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/TaxRuleMerchants/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        TaxRuleMerchantResource.save($scope.taxRuleMerchant, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/TaxRuleMerchants");
    };
});