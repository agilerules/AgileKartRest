

angular.module('agileKartRest').controller('EditCategoryController', function($scope, $routeParams, $location, CategoryResource , ProductCategoryResource, MerchantCategoryResource, CategoryOptionsResource) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.category = new CategoryResource(self.original);
            ProductCategoryResource.queryAll(function(items) {
                $scope.productCategoriesSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        productCategoryId : item.productCategoryId
                    };
                    var labelObject = {
                        value : item.productCategoryId,
                        text : item.productCategoryId
                    };
                    if($scope.category.productCategories){
                        $.each($scope.category.productCategories, function(idx, element) {
                            if(item.productCategoryId == element.productCategoryId) {
                                $scope.productCategoriesSelection.push(labelObject);
                                $scope.category.productCategories.push(wrappedObject);
                            }
                        });
                        self.original.productCategories = $scope.category.productCategories;
                    }
                    return labelObject;
                });
            });
            MerchantCategoryResource.queryAll(function(items) {
                $scope.merchantCategoriesSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        merchantCategoryId : item.merchantCategoryId
                    };
                    var labelObject = {
                        value : item.merchantCategoryId,
                        text : item.merchantCategoryId
                    };
                    if($scope.category.merchantCategories){
                        $.each($scope.category.merchantCategories, function(idx, element) {
                            if(item.merchantCategoryId == element.merchantCategoryId) {
                                $scope.merchantCategoriesSelection.push(labelObject);
                                $scope.category.merchantCategories.push(wrappedObject);
                            }
                        });
                        self.original.merchantCategories = $scope.category.merchantCategories;
                    }
                    return labelObject;
                });
            });
            CategoryOptionsResource.queryAll(function(items) {
                $scope.categoryOptionsesSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        categoryOptionsId : item.categoryOptionsId
                    };
                    var labelObject = {
                        value : item.categoryOptionsId,
                        text : item.categoryOptionsId
                    };
                    if($scope.category.categoryOptionses){
                        $.each($scope.category.categoryOptionses, function(idx, element) {
                            if(item.categoryOptionsId == element.categoryOptionsId) {
                                $scope.categoryOptionsesSelection.push(labelObject);
                                $scope.category.categoryOptionses.push(wrappedObject);
                            }
                        });
                        self.original.categoryOptionses = $scope.category.categoryOptionses;
                    }
                    return labelObject;
                });
            });
        };
        var errorCallback = function() {
            $location.path("/Categories");
        };
        CategoryResource.get({CategoryId:$routeParams.CategoryId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.category);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.category.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Categories");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Categories");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.category.$remove(successCallback, errorCallback);
    };
    
    $scope.productCategoriesSelection = $scope.productCategoriesSelection || [];
    $scope.$watch("productCategoriesSelection", function(selection) {
        if (typeof selection != 'undefined' && $scope.category) {
            $scope.category.productCategories = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.productCategoryId = selectedItem.value;
                $scope.category.productCategories.push(collectionItem);
            });
        }
    });
    $scope.merchantCategoriesSelection = $scope.merchantCategoriesSelection || [];
    $scope.$watch("merchantCategoriesSelection", function(selection) {
        if (typeof selection != 'undefined' && $scope.category) {
            $scope.category.merchantCategories = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.merchantCategoryId = selectedItem.value;
                $scope.category.merchantCategories.push(collectionItem);
            });
        }
    });
    $scope.categoryOptionsesSelection = $scope.categoryOptionsesSelection || [];
    $scope.$watch("categoryOptionsesSelection", function(selection) {
        if (typeof selection != 'undefined' && $scope.category) {
            $scope.category.categoryOptionses = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.categoryOptionsId = selectedItem.value;
                $scope.category.categoryOptionses.push(collectionItem);
            });
        }
    });
    
    $scope.get();
});