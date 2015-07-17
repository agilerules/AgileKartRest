
angular.module('agilekartV2').controller('NewProductReviewController', function ($scope, $location, locationParser, ProductReviewResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.productReview = $scope.productReview || {};
    

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