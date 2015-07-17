angular.module('agilekartV2').factory('EventResource', function($resource){
    var resource = $resource('rest/events/:EventId',{EventId:'@eventId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});