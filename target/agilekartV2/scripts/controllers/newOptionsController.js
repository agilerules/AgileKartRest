
angular.module('agilekartV2').controller('NewOptionsController', function ($scope, $location, locationParser, OptionsResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.options = $scope.options || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Options/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        OptionsResource.save($scope.options, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Options");
    };
});