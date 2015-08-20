angular.module('agileKartRest').factory('OfferResource', function($resource){
    var resource = $resource('rest/offers/:OfferId',{OfferId:'@offerId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});