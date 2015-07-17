
angular.module('agilekartV2').controller('NewOptionGroupsController', function ($scope, $location, locationParser, OptionGroupsResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.optionGroups = $scope.optionGroups || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/OptionGroups/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        OptionGroupsResource.save($scope.optionGroups, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/OptionGroups");
    };
});