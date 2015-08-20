angular.module('agileKartRest').factory('SequenceKeyTableResource', function($resource){
    var resource = $resource('rest/sequencekeytables/:SequenceKeyTableId',{SequenceKeyTableId:'@tableId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});