
angular.module('agileKartRest').controller('NewMerchantFeaturesController', function ($scope, $location, locationParser, MerchantFeaturesResource , FeatureOptionsResource, FeaturesResource, MerchantResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.merchantFeatures = $scope.merchantFeatures || {};
    
    $scope.featureOptionsList = FeatureOptionsResource.queryAll(function(items){
        $scope.featureOptionsSelectionList = $.map(items, function(item) {
            return ( {
                value : item.featureOptionsId,
                text : item.featureOptionsId
            });
        });
    });
    $scope.$watch("featureOptionsSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.merchantFeatures.featureOptions = {};
            $scope.merchantFeatures.featureOptions.featureOptionsId = selection.value;
        }
    });
    
    $scope.featuresList = FeaturesResource.queryAll(function(items){
        $scope.featuresSelectionList = $.map(items, function(item) {
            return ( {
                value : item.featureId,
                text : item.featureId
            });
        });
    });
    $scope.$watch("featuresSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.merchantFeatures.features = {};
            $scope.merchantFeatures.features.featureId = selection.value;
        }
    });
    
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
            $scope.merchantFeatures.merchant = {};
            $scope.merchantFeatures.merchant.merchantId = selection.value;
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/MerchantFeatures/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        MerchantFeaturesResource.save($scope.merchantFeatures, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/MerchantFeatures");
    };
});