angular.module('agileKartRest').factory('TaxResource', function($resource){
    var resource = $resource('rest/taxes/:TaxId',{TaxId:'@taxId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});