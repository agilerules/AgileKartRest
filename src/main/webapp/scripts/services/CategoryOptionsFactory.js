angular.module('agileKartRest').factory('CategoryOptionsResource', function($resource){
    var resource = $resource('rest/categoryoptions/:CategoryOptionsId',{CategoryOptionsId:'@categoryOptionsId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});