
angular.module('agilekartV2').controller('NewMerchantCategoryController', function ($scope, $location, locationParser, MerchantCategoryResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.merchantCategory = $scope.merchantCategory || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/MerchantCategories/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        MerchantCategoryResource.save($scope.merchantCategory, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/MerchantCategories");
    };
});