

angular.module('agilekartV2').controller('EditTaxRuleMerchantController', function($scope, $routeParams, $location, TaxRuleMerchantResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.taxRuleMerchant = new TaxRuleMerchantResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/TaxRuleMerchants");
        };
        TaxRuleMerchantResource.get({TaxRuleMerchantId:$routeParams.TaxRuleMerchantId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.taxRuleMerchant);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.taxRuleMerchant.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/TaxRuleMerchants");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/TaxRuleMerchants");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.taxRuleMerchant.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});