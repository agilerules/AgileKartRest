angular.module('agilekartV2').factory('OrderDetailsResource', function($resource){
    var resource = $resource('rest/orderdetails/:OrderDetailsId',{OrderDetailsId:'@detailId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});