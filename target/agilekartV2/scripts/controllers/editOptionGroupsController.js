

angular.module('agilekartV2').controller('EditOptionGroupsController', function($scope, $routeParams, $location, OptionGroupsResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.optionGroups = new OptionGroupsResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/OptionGroups");
        };
        OptionGroupsResource.get({OptionGroupsId:$routeParams.OptionGroupsId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.optionGroups);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.optionGroups.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/OptionGroups");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/OptionGroups");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.optionGroups.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});