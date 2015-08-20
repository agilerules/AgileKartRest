angular.module('agileKartRest').factory('UsersResource', function($resource){
    var resource = $resource('rest/users/:UsersId',{UsersId:'@userId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});