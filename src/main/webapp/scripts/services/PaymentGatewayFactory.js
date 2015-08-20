angular.module('agileKartRest').factory('PaymentGatewayResource', function($resource){
    var resource = $resource('rest/paymentgateways/:PaymentGatewayId',{PaymentGatewayId:'@paymentGatewayId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});