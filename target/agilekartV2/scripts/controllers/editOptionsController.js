

angular.module('agilekartV2').controller('EditOptionsController', function($scope, $routeParams, $location, OptionsResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.options = new OptionsResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Options");
        };
        OptionsResource.get({OptionsId:$routeParams.OptionsId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.options);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.options.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Options");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Options");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.options.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});