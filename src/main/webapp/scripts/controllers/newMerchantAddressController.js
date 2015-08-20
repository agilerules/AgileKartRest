
angular.module('agileKartRest').controller('NewMerchantAddressController', function ($scope, $location, locationParser, MerchantAddressResource , MerchantResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.merchantAddress = $scope.merchantAddress || {};
    
    $scope.merchantList = MerchantResource.queryAll(function(items){
        $scope.merchantSelectionList = $.map(items, function(item) {
            return ( {
                value : item.merchantId,
                text : item.merchantId
            });
        });
    });
    $scope.$watch("merchantSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.merchantAddress.merchant = {};
            $scope.merchantAddress.merchant.merchantId = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/MerchantAddresses/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        MerchantAddressResource.save($scope.merchantAddress, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/MerchantAddresses");
    };
});