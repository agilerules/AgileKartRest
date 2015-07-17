
angular.module('agilekartV2').controller('NewProductCategoryController', function ($scope, $location, locationParser, ProductCategoryResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.productCategory = $scope.productCategory || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/ProductCategories/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        ProductCategoryResource.save($scope.productCategory, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/ProductCategories");
    };
});