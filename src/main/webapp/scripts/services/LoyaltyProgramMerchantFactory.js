angular.module('agileKartRest').factory('LoyaltyProgramMerchantResource', function($resource){
    var resource = $resource('rest/loyaltyprogrammerchants/:LoyaltyProgramMerchantId',{LoyaltyProgramMerchantId:'@loyaltyProgramMerchantId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});