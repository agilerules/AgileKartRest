angular.module('agileKartRest').factory('TaxRuleMerchantResource', function($resource){
    var resource = $resource('rest/taxrulemerchants/:TaxRuleMerchantId',{TaxRuleMerchantId:'@taxRuleMerchantId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});