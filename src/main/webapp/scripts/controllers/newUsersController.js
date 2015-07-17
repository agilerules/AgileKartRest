
angular.module('agilekartV2').controller('NewUsersController', function ($scope, $location, locationParser, UsersResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.users = $scope.users || {};
    
    $scope.userEmailVerifiedList = [
        "true",
        " false"
    ];
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Users/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        UsersResource.save($scope.users, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Users");
    };
});