angular.module('agilekartV2').factory('MerchantCategoryResource', function($resource){
    var resource = $resource('rest/merchantcategories/:MerchantCategoryId',{MerchantCategoryId:'@merchantCategoryId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});