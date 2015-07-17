angular.module('agilekartV2').factory('LoyaltyEventDetailsResource', function($resource){
    var resource = $resource('rest/loyaltyeventdetails/:LoyaltyEventDetailsId',{LoyaltyEventDetailsId:'@loyaltyEventDetailsId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});