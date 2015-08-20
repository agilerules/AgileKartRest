angular.module('agileKartRest').factory('ProductCategoryResource', function($resource){
    var resource = $resource('rest/productcategories/:ProductCategoryId',{ProductCategoryId:'@productCategoryId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});