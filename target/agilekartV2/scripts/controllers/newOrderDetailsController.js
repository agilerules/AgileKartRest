
angular.module('agilekartV2').controller('NewOrderDetailsController', function ($scope, $location, locationParser, OrderDetailsResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.orderDetails = $scope.orderDetails || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/OrderDetails/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        OrderDetailsResource.save($scope.orderDetails, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/OrderDetails");
    };
});