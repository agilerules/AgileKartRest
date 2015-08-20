angular.module('agileKartRest').factory('OrderStatusDescResource', function($resource){
    var resource = $resource('rest/orderstatusdescs/:OrderStatusDescId',{OrderStatusDescId:'@orderStatusDescId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});