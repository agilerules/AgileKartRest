
angular.module('agileKartRest').controller('NewProductController', function ($scope, $location, locationParser, ProductResource , MerchantResource, ProductOptionResource, ProductReviewResource, ProductCategoryResource, OrderDetailsResource, OfferResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.product = $scope.product || {};
    
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
            $scope.product.merchant = {};
            $scope.product.merchant.merchantId = selection.value;
        }
    });
    
    $scope.productUnlimitedList = [
        "true",
        " false"
    ];
    
    $scope.productOptionsList = ProductOptionResource.queryAll(function(items){
        $scope.productOptionsSelectionList = $.map(items, function(item) {
            return ( {
                value : item.productOptionId,
                text : item.productOptionId
            });
        });
    });
    $scope.$watch("productOptionsSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.product.productOptions = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.productOptionId = selectedItem.value;
                $scope.product.productOptions.push(collectionItem);
            });
        }
    });
    
    $scope.productReviewsList = ProductReviewResource.queryAll(function(items){
        $scope.productReviewsSelectionList = $.map(items, function(item) {
            return ( {
                value : item.productReviewId,
                text : item.productReviewId
            });
        });
    });
    $scope.$watch("productReviewsSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.product.productReviews = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.productReviewId = selectedItem.value;
                $scope.product.productReviews.push(collectionItem);
            });
        }
    });
    
    $scope.productCategoriesList = ProductCategoryResource.queryAll(function(items){
        $scope.productCategoriesSelectionList = $.map(items, function(item) {
            return ( {
                value : item.productCategoryId,
                text : item.productCategoryId
            });
        });
    });
    $scope.$watch("productCategoriesSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.product.productCategories = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.productCategoryId = selectedItem.value;
                $scope.product.productCategories.push(collectionItem);
            });
        }
    });
    
    $scope.orderDetailsesList = OrderDetailsResource.queryAll(function(items){
        $scope.orderDetailsesSelectionList = $.map(items, function(item) {
            return ( {
                value : item.detailId,
                text : item.detailId
            });
        });
    });
    $scope.$watch("orderDetailsesSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.product.orderDetailses = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.detailId = selectedItem.value;
                $scope.product.orderDetailses.push(collectionItem);
            });
        }
    });
    
    $scope.offersList = OfferResource.queryAll(function(items){
        $scope.offersSelectionList = $.map(items, function(item) {
            return ( {
                value : item.offerId,
                text : item.offerId
            });
        });
    });
    $scope.$watch("offersSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.product.offers = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.offerId = selectedItem.value;
                $scope.product.offers.push(collectionItem);
            });
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Products/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        ProductResource.save($scope.product, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Products");
    };
});