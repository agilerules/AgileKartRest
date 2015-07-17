
angular.module('agilekartV2').controller('NewOrderStatusDescController', function ($scope, $location, locationParser, OrderStatusDescResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.orderStatusDesc = $scope.orderStatusDesc || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/OrderStatusDescs/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        OrderStatusDescResource.save($scope.orderStatusDesc, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/OrderStatusDescs");
    };
});