
angular.module('agilekartV2').controller('NewMerchantAddressController', function ($scope, $location, locationParser, MerchantAddressResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.merchantAddress = $scope.merchantAddress || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/MerchantAddresses/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        MerchantAddressResource.save($scope.merchantAddress, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/MerchantAddresses");
    };
});