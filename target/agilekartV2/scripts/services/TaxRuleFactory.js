angular.module('agilekartV2').factory('TaxRuleResource', function($resource){
    var resource = $resource('rest/taxrules/:TaxRuleId',{TaxRuleId:'@taxRuleId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});