
angular.module('agileKartRest').controller('NewUserAddressController', function ($scope, $location, locationParser, UserAddressResource , UsersResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.userAddress = $scope.userAddress || {};
    
    $scope.usersList = UsersResource.queryAll(function(items){
        $scope.usersSelectionList = $.map(items, function(item) {
            return ( {
                value : item.userId,
                text : item.userId
            });
        });
    });
    $scope.$watch("usersSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.userAddress.users = {};
            $scope.userAddress.users.userId = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/UserAddresses/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        UserAddressResource.save($scope.userAddress, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/UserAddresses");
    };
});