angular.module('agileKartRest').factory('UserFavouritesResource', function($resource){
    var resource = $resource('rest/userfavourites/:UserFavouritesId',{UserFavouritesId:'@userFavouriteId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});