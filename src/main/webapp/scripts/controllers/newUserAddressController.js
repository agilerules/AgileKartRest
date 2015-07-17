
angular.module('agilekartV2').controller('NewUserAddressController', function ($scope, $location, locationParser, UserAddressResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.userAddress = $scope.userAddress || {};
    

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