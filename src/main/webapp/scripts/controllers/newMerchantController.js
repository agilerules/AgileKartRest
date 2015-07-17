
angular.module('agilekartV2').controller('NewMerchantController', function ($scope, $location, locationParser, MerchantResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.merchant = $scope.merchant || {};
    
    $scope.merchantEmailVerifiedList = [
        "true",
        " false"
    ];
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Merchants/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        MerchantResource.save($scope.merchant, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Merchants");
    };
});