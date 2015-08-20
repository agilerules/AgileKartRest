
angular.module('agileKartRest').controller('NewOptionGroupsController', function ($scope, $location, locationParser, OptionGroupsResource , OptionsResource, CategoryOptionsResource, ProductOptionResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.optionGroups = $scope.optionGroups || {};
    
    $scope.optionsesList = OptionsResource.queryAll(function(items){
        $scope.optionsesSelectionList = $.map(items, function(item) {
            return ( {
                value : item.optionId,
                text : item.optionId
            });
        });
    });
    $scope.$watch("optionsesSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.optionGroups.optionses = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.optionId = selectedItem.value;
                $scope.optionGroups.optionses.push(collectionItem);
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
            $scope.optionGroups.categoryOptionses = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.categoryOptionsId = selectedItem.value;
                $scope.optionGroups.categoryOptionses.push(collectionItem);
            });
        }
    });
    
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
            $scope.optionGroups.productOptions = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.productOptionId = selectedItem.value;
                $scope.optionGroups.productOptions.push(collectionItem);
            });
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/OptionGroups/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        OptionGroupsResource.save($scope.optionGroups, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/OptionGroups");
    };
});