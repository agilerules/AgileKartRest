
angular.module('agilekartV2').controller('NewTaxRuleMerchantController', function ($scope, $location, locationParser, TaxRuleMerchantResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.taxRuleMerchant = $scope.taxRuleMerchant || {};
    

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