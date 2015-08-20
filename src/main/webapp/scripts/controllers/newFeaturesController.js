
angular.module('agileKartRest').controller('NewFeaturesController', function ($scope, $location, locationParser, FeaturesResource , FeatureOptionsResource, MerchantFeaturesResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.features = $scope.features || {};
    
    $scope.featureOptionsesList = FeatureOptionsResource.queryAll(function(items){
        $scope.featureOptionsesSelectionList = $.map(items, function(item) {
            return ( {
                value : item.featureOptionsId,
                text : item.featureOptionsId
            });
        });
    });
    $scope.$watch("featureOptionsesSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.features.featureOptionses = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.featureOptionsId = selectedItem.value;
                $scope.features.featureOptionses.push(collectionItem);
            });
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
            $scope.features.merchantFeatureses = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.merchantFeaturesId = selectedItem.value;
                $scope.features.merchantFeatureses.push(collectionItem);
            });
        }
    });
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Features/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        FeaturesResource.save($scope.features, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Features");
    };
});