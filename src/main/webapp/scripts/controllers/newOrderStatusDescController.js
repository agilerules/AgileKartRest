
angular.module('agileKartRest').controller('NewOrderStatusDescController', function ($scope, $location, locationParser, OrderStatusDescResource , OrderStatusResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.orderStatusDesc = $scope.orderStatusDesc || {};
    
    $scope.orderStatusesList = OrderStatusResource.queryAll(function(items){
        $scope.orderStatusesSelectionList = $.map(items, function(item) {
            return ( {
                value : item.orderStatusId,
                text : item.orderStatusId
            });
        });
    });
    $scope.$watch("orderStatusesSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.orderStatusDesc.orderStatuses = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.orderStatusId = selectedItem.value;
                $scope.orderStatusDesc.orderStatuses.push(collectionItem);
            });
        }
    });
    

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