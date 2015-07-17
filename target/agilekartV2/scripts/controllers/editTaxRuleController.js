

angular.module('agilekartV2').controller('EditTaxRuleController', function($scope, $routeParams, $location, TaxRuleResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.taxRule = new TaxRuleResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/TaxRules");
        };
        TaxRuleResource.get({TaxRuleId:$routeParams.TaxRuleId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.taxRule);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.taxRule.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/TaxRules");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/TaxRules");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.taxRule.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});