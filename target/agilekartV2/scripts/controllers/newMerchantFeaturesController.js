
angular.module('agilekartV2').controller('NewMerchantFeaturesController', function ($scope, $location, locationParser, MerchantFeaturesResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.merchantFeatures = $scope.merchantFeatures || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/MerchantFeatures/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        MerchantFeaturesResource.save($scope.merchantFeatures, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/MerchantFeatures");
    };
});