

angular.module('agilekartV2').controller('EditOrdersController', function($scope, $routeParams, $location, OrdersResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.orders = new OrdersResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Orders");
        };
        OrdersResource.get({OrdersId:$routeParams.OrdersId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.orders);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.orders.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Orders");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Orders");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.orders.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});