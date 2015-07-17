
angular.module('agilekartV2').controller('NewUserFavouritesController', function ($scope, $location, locationParser, UserFavouritesResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.userFavourites = $scope.userFavourites || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/UserFavourites/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        UserFavouritesResource.save($scope.userFavourites, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/UserFavourites");
    };
});