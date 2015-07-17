

angular.module('agilekartV2').controller('EditOfferController', function($scope, $routeParams, $location, OfferResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.offer = new OfferResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Offers");
        };
        OfferResource.get({OfferId:$routeParams.OfferId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.offer);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.offer.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Offers");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Offers");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.offer.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});