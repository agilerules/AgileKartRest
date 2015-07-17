
angular.module('agilekartV2').controller('NewFeatureOptionsController', function ($scope, $location, locationParser, FeatureOptionsResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.featureOptions = $scope.featureOptions || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/FeatureOptions/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        FeatureOptionsResource.save($scope.featureOptions, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/FeatureOptions");
    };
});