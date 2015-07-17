angular.module('agilekartV2').factory('ProductOptionResource', function($resource){
    var resource = $resource('rest/productoptions/:ProductOptionId',{ProductOptionId:'@productOptionId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});