
angular.module('agileKartRest').controller('NewMerchantCategoryController', function ($scope, $location, locationParser, MerchantCategoryResource , CategoryResource, MerchantResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.merchantCategory = $scope.merchantCategory || {};
    
    $scope.categoryList = CategoryResource.queryAll(function(items){
        $scope.categorySelectionList = $.map(items, function(item) {
            return ( {
                value : item.categoryId,
                text : item.categoryId
            });
        });
    });
    $scope.$watch("categorySelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.merchantCategory.category = {};
            $scope.merchantCategory.category.categoryId = selection.value;
        }
    });
    
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
            $scope.merchantCategory.merchant = {};
            $scope.merchantCategory.merchant.merchantId = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/MerchantCategories/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        MerchantCategoryResource.save($scope.merchantCategory, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/MerchantCategories");
    };
});