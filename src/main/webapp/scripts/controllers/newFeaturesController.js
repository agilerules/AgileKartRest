
angular.module('agilekartV2').controller('NewFeaturesController', function ($scope, $location, locationParser, FeaturesResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.features = $scope.features || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Features/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        FeaturesResource.save($scope.features, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Features");
    };
});