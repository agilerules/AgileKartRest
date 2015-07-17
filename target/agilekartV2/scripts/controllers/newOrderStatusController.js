
angular.module('agilekartV2').controller('NewOrderStatusController', function ($scope, $location, locationParser, OrderStatusResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.orderStatus = $scope.orderStatus || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/OrderStatuses/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        OrderStatusResource.save($scope.orderStatus, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/OrderStatuses");
    };
});