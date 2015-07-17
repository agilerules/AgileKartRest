
angular.module('agilekartV2').controller('NewMerchantReviewController', function ($scope, $location, locationParser, MerchantReviewResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.merchantReview = $scope.merchantReview || {};
    

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