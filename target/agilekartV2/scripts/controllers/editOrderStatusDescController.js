

angular.module('agilekartV2').controller('EditOrderStatusDescController', function($scope, $routeParams, $location, OrderStatusDescResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.orderStatusDesc = new OrderStatusDescResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/OrderStatusDescs");
        };
        OrderStatusDescResource.get({OrderStatusDescId:$routeParams.OrderStatusDescId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.orderStatusDesc);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.orderStatusDesc.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/OrderStatusDescs");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/OrderStatusDescs");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.orderStatusDesc.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});