

angular.module('agilekartV2').controller('EditTaxController', function($scope, $routeParams, $location, TaxResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.tax = new TaxResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Taxes");
        };
        TaxResource.get({TaxId:$routeParams.TaxId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.tax);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.tax.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Taxes");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Taxes");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.tax.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});