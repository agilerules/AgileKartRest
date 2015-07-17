
angular.module('agilekartV2').controller('NewCategoryOptionsController', function ($scope, $location, locationParser, CategoryOptionsResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.categoryOptions = $scope.categoryOptions || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/CategoryOptions/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        CategoryOptionsResource.save($scope.categoryOptions, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/CategoryOptions");
    };
});