angular.module('agileKartRest').factory('MerchantAddressResource', function($resource){
    var resource = $resource('rest/merchantaddresses/:MerchantAddressId',{MerchantAddressId:'@merchantAddressId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});