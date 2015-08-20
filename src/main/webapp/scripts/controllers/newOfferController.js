
angular.module('agileKartRest').controller('NewOfferController', function ($scope, $location, locationParser, OfferResource , MerchantResource, ProductResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.offer = $scope.offer || {};
    
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
            $scope.offer.merchant = {};
            $scope.offer.merchant.merchantId = selection.value;
        }
    });
    
    $scope.productList = ProductResource.queryAll(function(items){
        $scope.productSelectionList = $.map(items, function(item) {
            return ( {
                value : item.productId,
                text : item.productId
            });
        });
    });
    $scope.$watch("productSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.offer.product = {};
            $scope.offer.product.productId = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Offers/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        OfferResource.save($scope.offer, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Offers");
    };
});