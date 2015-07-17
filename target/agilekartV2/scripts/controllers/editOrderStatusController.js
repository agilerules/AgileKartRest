

angular.module('agilekartV2').controller('EditOrderStatusController', function($scope, $routeParams, $location, OrderStatusResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.orderStatus = new OrderStatusResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/OrderStatuses");
        };
        OrderStatusResource.get({OrderStatusId:$routeParams.OrderStatusId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.orderStatus);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.orderStatus.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/OrderStatuses");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/OrderStatuses");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.orderStatus.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});