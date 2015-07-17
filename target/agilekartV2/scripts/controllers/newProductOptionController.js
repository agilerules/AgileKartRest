
angular.module('agilekartV2').controller('NewProductOptionController', function ($scope, $location, locationParser, ProductOptionResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.productOption = $scope.productOption || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/ProductOptions/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        ProductOptionResource.save($scope.productOption, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/ProductOptions");
    };
});