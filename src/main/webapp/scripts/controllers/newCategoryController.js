
angular.module('agileKartRest').controller('NewCategoryController', function ($scope, $location, locationParser, CategoryResource , ProductCategoryResource, MerchantCategoryResource, CategoryOptionsResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.category = $scope.category || {};
    
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
            $scope.category.productCategories = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.productCategoryId = selectedItem.value;
                $scope.category.productCategories.push(collectionItem);
            });
        }
    });
    
    $scope.merchantCategoriesList = MerchantCategoryResource.queryAll(function(items){
        $scope.merchantCategoriesSelectionList = $.map(items, function(item) {
            return ( {
                value : item.merchantCategoryId,
                text : item.merchantCategoryId
            });
        });
    });
    $scope.$watch("merchantCategoriesSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.category.merchantCategories = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.merchantCategoryId = selectedItem.value;
                $scope.category.merchantCategories.push(collectionItem);
            });
        }
    });
    
    $scope.categoryOptionsesList = CategoryOptionsResource.queryAll(function(items){
        $scope.categoryOptionsesSelectionList = $.map(items, function(item) {
            return ( {
                value : item.categoryOptionsId,
                text : item.categoryOptionsId
            });
        });
    });
    $scope.$watch("categoryOptionsesSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.category.categoryOptionses = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.categoryOptionsId = selectedItem.value;
                $scope.category.categoryOptionses.push(collectionItem);
            });
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Categories/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        CategoryResource.save($scope.category, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Categories");
    };
});