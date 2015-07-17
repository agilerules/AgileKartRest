
angular.module('agilekartV2').controller('NewOfferController', function ($scope, $location, locationParser, OfferResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.offer = $scope.offer || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Offers/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        OfferResource.save($scope.offer, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Offers");
    };
});