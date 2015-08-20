angular.module('agileKartRest').factory('FeatureOptionsResource', function($resource){
    var resource = $resource('rest/featureoptions/:FeatureOptionsId',{FeatureOptionsId:'@featureOptionsId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});