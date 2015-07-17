

angular.module('agilekartV2').controller('EditProductReviewController', function($scope, $routeParams, $location, ProductReviewResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.productReview = new ProductReviewResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/ProductReviews");
        };
        ProductReviewResource.get({ProductReviewId:$routeParams.ProductReviewId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.productReview);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.productReview.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/ProductReviews");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/ProductReviews");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.productReview.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});