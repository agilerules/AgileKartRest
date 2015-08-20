
angular.module('agileKartRest').controller('NewTaxRuleController', function ($scope, $location, locationParser, TaxRuleResource , TaxResource, TaxRuleMerchantResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.taxRule = $scope.taxRule || {};
    
    $scope.taxList = TaxResource.queryAll(function(items){
        $scope.taxSelectionList = $.map(items, function(item) {
            return ( {
                value : item.taxId,
                text : item.taxId
            });
        });
    });
    $scope.$watch("taxSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.taxRule.tax = {};
            $scope.taxRule.tax.taxId = selection.value;
        }
    });
    
    $scope.taxRuleMerchantsList = TaxRuleMerchantResource.queryAll(function(items){
        $scope.taxRuleMerchantsSelectionList = $.map(items, function(item) {
            return ( {
                value : item.taxRuleMerchantId,
                text : item.taxRuleMerchantId
            });
        });
    });
    $scope.$watch("taxRuleMerchantsSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.taxRule.taxRuleMerchants = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.taxRuleMerchantId = selectedItem.value;
                $scope.taxRule.taxRuleMerchants.push(collectionItem);
            });
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/TaxRules/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        TaxRuleResource.save($scope.taxRule, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/TaxRules");
    };
});