angular.module('agilekartV2').factory('ProductResource', function($resource){
    var resource = $resource('rest/products/:ProductId',{ProductId:'@productId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});