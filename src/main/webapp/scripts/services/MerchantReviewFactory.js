angular.module('agileKartRest').factory('MerchantReviewResource', function($resource){
    var resource = $resource('rest/merchantreviews/:MerchantReviewId',{MerchantReviewId:'@merchantReviewId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});