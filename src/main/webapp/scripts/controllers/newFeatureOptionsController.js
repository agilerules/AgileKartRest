
angular.module('agileKartRest').controller('NewFeatureOptionsController', function ($scope, $location, locationParser, FeatureOptionsResource , FeaturesResource, MerchantFeaturesResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.featureOptions = $scope.featureOptions || {};
    
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
            $scope.featureOptions.features = {};
            $scope.featureOptions.features.featureId = selection.value;
        }
    });
    
    $scope.merchantFeaturesesList = MerchantFeaturesResource.queryAll(function(items){
        $scope.merchantFeaturesesSelectionList = $.map(items, function(item) {
            return ( {
                value : item.merchantFeaturesId,
                text : item.merchantFeaturesId
            });
        });
    });
    $scope.$watch("merchantFeaturesesSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.featureOptions.merchantFeatureses = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.merchantFeaturesId = selectedItem.value;
                $scope.featureOptions.merchantFeatureses.push(collectionItem);
            });
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/FeatureOptions/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        FeatureOptionsResource.save($scope.featureOptions, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/FeatureOptions");
    };
});