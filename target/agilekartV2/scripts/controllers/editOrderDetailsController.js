

angular.module('agilekartV2').controller('EditOrderDetailsController', function($scope, $routeParams, $location, OrderDetailsResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.orderDetails = new OrderDetailsResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/OrderDetails");
        };
        OrderDetailsResource.get({OrderDetailsId:$routeParams.OrderDetailsId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.orderDetails);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.orderDetails.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/OrderDetails");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/OrderDetails");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.orderDetails.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});