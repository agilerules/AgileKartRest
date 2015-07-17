
angular.module('agilekartV2').controller('NewTaxController', function ($scope, $location, locationParser, TaxResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.tax = $scope.tax || {};
    

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