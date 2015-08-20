
angular.module('agileKartRest').controller('NewMerchantReviewController', function ($scope, $location, locationParser, MerchantReviewResource , MerchantResource, UsersResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.merchantReview = $scope.merchantReview || {};
    
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
            $scope.merchantReview.merchant = {};
            $scope.merchantReview.merchant.merchantId = selection.value;
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
            $scope.merchantReview.users = {};
            $scope.merchantReview.users.userId = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/MerchantReviews/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        MerchantReviewResource.save($scope.merchantReview, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/MerchantReviews");
    };
});