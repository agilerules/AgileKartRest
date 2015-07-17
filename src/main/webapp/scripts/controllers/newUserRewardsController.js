
angular.module('agilekartV2').controller('NewUserRewardsController', function ($scope, $location, locationParser, UserRewardsResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.userRewards = $scope.userRewards || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/UserRewards/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        UserRewardsResource.save($scope.userRewards, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/UserRewards");
    };
});