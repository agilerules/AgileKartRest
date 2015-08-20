
angular.module('agileKartRest').controller('NewTaxController', function ($scope, $location, locationParser, TaxResource , TaxRuleResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.tax = $scope.tax || {};
    
    $scope.taxRulesList = TaxRuleResource.queryAll(function(items){
        $scope.taxRulesSelectionList = $.map(items, function(item) {
            return ( {
                value : item.taxRuleId,
                text : item.taxRuleId
            });
        });
    });
    $scope.$watch("taxRulesSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.tax.taxRules = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.taxRuleId = selectedItem.value;
                $scope.tax.taxRules.push(collectionItem);
            });
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Taxes/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        TaxResource.save($scope.tax, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Taxes");
    };
});