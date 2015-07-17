

angular.module('agilekartV2').controller('EditMerchantReviewController', function($scope, $routeParams, $location, MerchantReviewResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.merchantReview = new MerchantReviewResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/MerchantReviews");
        };
        MerchantReviewResource.get({MerchantReviewId:$routeParams.MerchantReviewId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.merchantReview);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.merchantReview.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/MerchantReviews");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/MerchantReviews");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.merchantReview.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});