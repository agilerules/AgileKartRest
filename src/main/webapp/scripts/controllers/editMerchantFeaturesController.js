

angular.module('agilekartV2').controller('EditMerchantFeaturesController', function($scope, $routeParams, $location, MerchantFeaturesResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.merchantFeatures = new MerchantFeaturesResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/MerchantFeatures");
        };
        MerchantFeaturesResource.get({MerchantFeaturesId:$routeParams.MerchantFeaturesId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.merchantFeatures);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.merchantFeatures.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/MerchantFeatures");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/MerchantFeatures");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.merchantFeatures.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});