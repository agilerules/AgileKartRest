

angular.module('agilekartV2').controller('EditCategoryOptionsController', function($scope, $routeParams, $location, CategoryOptionsResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.categoryOptions = new CategoryOptionsResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/CategoryOptions");
        };
        CategoryOptionsResource.get({CategoryOptionsId:$routeParams.CategoryOptionsId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.categoryOptions);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.categoryOptions.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/CategoryOptions");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/CategoryOptions");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.categoryOptions.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});