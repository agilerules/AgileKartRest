angular.module('agilekartV2').factory('CategoryResource', function($resource){
    var resource = $resource('rest/categories/:CategoryId',{CategoryId:'@categoryId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});