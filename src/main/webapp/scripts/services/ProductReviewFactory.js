angular.module('agilekartV2').factory('ProductReviewResource', function($resource){
    var resource = $resource('rest/productreviews/:ProductReviewId',{ProductReviewId:'@productReviewId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});