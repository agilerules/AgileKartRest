angular.module('agileKartRest').factory('MerchantFeaturesResource', function($resource){
    var resource = $resource('rest/merchantfeatures/:MerchantFeaturesId',{MerchantFeaturesId:'@merchantFeaturesId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});