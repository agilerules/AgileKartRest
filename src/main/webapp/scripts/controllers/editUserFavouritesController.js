

angular.module('agilekartV2').controller('EditUserFavouritesController', function($scope, $routeParams, $location, UserFavouritesResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.userFavourites = new UserFavouritesResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/UserFavourites");
        };
        UserFavouritesResource.get({UserFavouritesId:$routeParams.UserFavouritesId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.userFavourites);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.userFavourites.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/UserFavourites");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/UserFavourites");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.userFavourites.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});