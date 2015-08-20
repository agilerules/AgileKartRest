
angular.module('agileKartRest').controller('NewOptionsController', function ($scope, $location, locationParser, OptionsResource , OptionGroupsResource, ProductOptionResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.options = $scope.options || {};
    
    $scope.optionGroupsList = OptionGroupsResource.queryAll(function(items){
        $scope.optionGroupsSelectionList = $.map(items, function(item) {
            return ( {
                value : item.optionGroupId,
                text : item.optionGroupId
            });
        });
    });
    $scope.$watch("optionGroupsSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.options.optionGroups = {};
            $scope.options.optionGroups.optionGroupId = selection.value;
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
            $scope.options.productOptions = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.productOptionId = selectedItem.value;
                $scope.options.productOptions.push(collectionItem);
            });
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Options/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        OptionsResource.save($scope.options, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Options");
    };
});