
angular.module('agileKartRest').controller('NewProductReviewController', function ($scope, $location, locationParser, ProductReviewResource , ProductResource, UsersResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.productReview = $scope.productReview || {};
    
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
            $scope.productReview.product = {};
            $scope.productReview.product.productId = selection.value;
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
            $scope.productReview.users = {};
            $scope.productReview.users.userId = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/ProductReviews/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        ProductReviewResource.save($scope.productReview, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/ProductReviews");
    };
});