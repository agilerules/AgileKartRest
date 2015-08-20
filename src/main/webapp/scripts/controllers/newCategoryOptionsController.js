
angular.module('agileKartRest').controller('NewCategoryOptionsController', function ($scope, $location, locationParser, CategoryOptionsResource , CategoryResource, OptionGroupsResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.categoryOptions = $scope.categoryOptions || {};
    
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
            $scope.categoryOptions.category = {};
            $scope.categoryOptions.category.categoryId = selection.value;
        }
    });
    
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
            $scope.categoryOptions.optionGroups = {};
            $scope.categoryOptions.optionGroups.optionGroupId = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/CategoryOptions/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        CategoryOptionsResource.save($scope.categoryOptions, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/CategoryOptions");
    };
});