
angular.module('agileKartRest').controller('NewUserFavouritesController', function ($scope, $location, locationParser, UserFavouritesResource , MerchantResource, UsersResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.userFavourites = $scope.userFavourites || {};
    
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
            $scope.userFavourites.merchant = {};
            $scope.userFavourites.merchant.merchantId = selection.value;
        }
    });
    
    $scope.usersList = UsersResource.queryAll(function(items){
        $scope.usersSelectionList = $.map(items, function(item) {
            return ( {
                value : item.userId,
                text : item.userId
            });
        });
    });
    $scope.$watch("usersSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.userFavourites.users = {};
            $scope.userFavourites.users.userId = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/UserFavourites/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        UserFavouritesResource.save($scope.userFavourites, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/UserFavourites");
    };
});