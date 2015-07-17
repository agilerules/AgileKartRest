

angular.module('agilekartV2').controller('EditUsersController', function($scope, $routeParams, $location, UsersResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.users = new UsersResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Users");
        };
        UsersResource.get({UsersId:$routeParams.UsersId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.users);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.users.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Users");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Users");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.users.$remove(successCallback, errorCallback);
    };
    
    $scope.userEmailVerifiedList = [
        "true",  
        " false"  
    ];
    
    $scope.get();
});