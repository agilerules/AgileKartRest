angular.module('agileKartRest').factory('LoyaltyProgramTierResource', function($resource){
    var resource = $resource('rest/loyaltyprogramtiers/:LoyaltyProgramTierId',{LoyaltyProgramTierId:'@tierId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});