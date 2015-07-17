
angular.module('agilekartV2').controller('NewOrdersController', function ($scope, $location, locationParser, OrdersResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.orders = $scope.orders || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Orders/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        OrdersResource.save($scope.orders, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Orders");
    };
});