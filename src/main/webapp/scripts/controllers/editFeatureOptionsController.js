

angular.module('agilekartV2').controller('EditFeatureOptionsController', function($scope, $routeParams, $location, FeatureOptionsResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.featureOptions = new FeatureOptionsResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/FeatureOptions");
        };
        FeatureOptionsResource.get({FeatureOptionsId:$routeParams.FeatureOptionsId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.featureOptions);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.featureOptions.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/FeatureOptions");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/FeatureOptions");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.featureOptions.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});