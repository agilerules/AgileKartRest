

angular.module('agileKartRest').controller('EditFeaturesController', function($scope, $routeParams, $location, FeaturesResource , FeatureOptionsResource, MerchantFeaturesResource) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.features = new FeaturesResource(self.original);
            FeatureOptionsResource.queryAll(function(items) {
                $scope.featureOptionsesSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        featureOptionsId : item.featureOptionsId
                    };
                    var labelObject = {
                        value : item.featureOptionsId,
                        text : item.featureOptionsId
                    };
                    if($scope.features.featureOptionses){
                        $.each($scope.features.featureOptionses, function(idx, element) {
                            if(item.featureOptionsId == element.featureOptionsId) {
                                $scope.featureOptionsesSelection.push(labelObject);
                                $scope.features.featureOptionses.push(wrappedObject);
                            }
                        });
                        self.original.featureOptionses = $scope.features.featureOptionses;
                    }
                    return labelObject;
                });
            });
            MerchantFeaturesResource.queryAll(function(items) {
                $scope.merchantFeaturesesSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        merchantFeaturesId : item.merchantFeaturesId
                    };
                    var labelObject = {
                        value : item.merchantFeaturesId,
                        text : item.merchantFeaturesId
                    };
                    if($scope.features.merchantFeatureses){
                        $.each($scope.features.merchantFeatureses, function(idx, element) {
                            if(item.merchantFeaturesId == element.merchantFeaturesId) {
                                $scope.merchantFeaturesesSelection.push(labelObject);
                                $scope.features.merchantFeatureses.push(wrappedObject);
                            }
                        });
                        self.original.merchantFeatureses = $scope.features.merchantFeatureses;
                    }
                    return labelObject;
                });
            });
        };
        var errorCallback = function() {
            $location.path("/Features");
        };
        FeaturesResource.get({FeaturesId:$routeParams.FeaturesId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.features);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.features.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Features");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Features");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.features.$remove(successCallback, errorCallback);
    };
    
    $scope.featureOptionsesSelection = $scope.featureOptionsesSelection || [];
    $scope.$watch("featureOptionsesSelection", function(selection) {
        if (typeof selection != 'undefined' && $scope.features) {
            $scope.features.featureOptionses = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.featureOptionsId = selectedItem.value;
                $scope.features.featureOptionses.push(collectionItem);
            });
        }
    });
    $scope.merchantFeaturesesSelection = $scope.merchantFeaturesesSelection || [];
    $scope.$watch("merchantFeaturesesSelection", function(selection) {
        if (typeof selection != 'undefined' && $scope.features) {
            $scope.features.merchantFeatureses = [];
            $.each(selection, function(idx,selectedItem) {
                var collectionItem = {};
                collectionItem.merchantFeaturesId = selectedItem.value;
                $scope.features.merchantFeatureses.push(collectionItem);
            });
        }
    });
    
    $scope.get();
});