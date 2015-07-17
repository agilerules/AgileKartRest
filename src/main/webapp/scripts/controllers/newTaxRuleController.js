
angular.module('agilekartV2').controller('NewTaxRuleController', function ($scope, $location, locationParser, TaxRuleResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.taxRule = $scope.taxRule || {};
    

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