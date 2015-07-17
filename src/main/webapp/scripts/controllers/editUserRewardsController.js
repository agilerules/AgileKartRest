

angular.module('agilekartV2').controller('EditUserRewardsController', function($scope, $routeParams, $location, UserRewardsResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.userRewards = new UserRewardsResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/UserRewards");
        };
        UserRewardsResource.get({UserRewardsId:$routeParams.UserRewardsId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.userRewards);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.userRewards.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/UserRewards");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/UserRewards");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.userRewards.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});