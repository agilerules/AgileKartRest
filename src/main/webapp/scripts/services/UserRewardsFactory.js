angular.module('agileKartRest').factory('UserRewardsResource', function($resource){
    var resource = $resource('rest/userrewards/:UserRewardsId',{UserRewardsId:'@rewardId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});