

angular.module('agilekartV2').controller('EditMerchantController', function($scope, $routeParams, $location, MerchantResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.merchant = new MerchantResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Merchants");
        };
        MerchantResource.get({MerchantId:$routeParams.MerchantId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.merchant);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.merchant.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Merchants");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Merchants");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.merchant.$remove(successCallback, errorCallback);
    };
    
    $scope.merchantEmailVerifiedList = [
        "true",  
        " false"  
    ];
    
    $scope.get();
});