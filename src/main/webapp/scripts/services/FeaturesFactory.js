angular.module('agileKartRest').factory('FeaturesResource', function($resource){
    var resource = $resource('rest/features/:FeaturesId',{FeaturesId:'@featureId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});