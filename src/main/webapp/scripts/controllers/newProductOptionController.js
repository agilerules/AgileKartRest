
angular.module('agileKartRest').controller('NewProductOptionController', function ($scope, $location, locationParser, ProductOptionResource , OptionGroupsResource, OptionsResource, ProductResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.productOption = $scope.productOption || {};
    
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
            $scope.productOption.optionGroups = {};
            $scope.productOption.optionGroups.optionGroupId = selection.value;
        }
    });
    
    $scope.optionsList = OptionsResource.queryAll(function(items){
        $scope.optionsSelectionList = $.map(items, function(item) {
            return ( {
                value : item.optionId,
                text : item.optionId
            });
        });
    });
    $scope.$watch("optionsSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.productOption.options = {};
            $scope.productOption.options.optionId = selection.value;
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
            $scope.productOption.product = {};
            $scope.productOption.product.productId = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/ProductOptions/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        ProductOptionResource.save($scope.productOption, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/ProductOptions");
    };
});