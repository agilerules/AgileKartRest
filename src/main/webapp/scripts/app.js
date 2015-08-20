'use strict';

angular.module('agileKartRest',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Categories',{templateUrl:'views/Category/search.html',controller:'SearchCategoryController'})
      .when('/Categories/new',{templateUrl:'views/Category/detail.html',controller:'NewCategoryController'})
      .when('/Categories/edit/:CategoryId',{templateUrl:'views/Category/detail.html',controller:'EditCategoryController'})
      .when('/CategoryOptions',{templateUrl:'views/CategoryOptions/search.html',controller:'SearchCategoryOptionsController'})
      .when('/CategoryOptions/new',{templateUrl:'views/CategoryOptions/detail.html',controller:'NewCategoryOptionsController'})
      .when('/CategoryOptions/edit/:CategoryOptionsId',{templateUrl:'views/CategoryOptions/detail.html',controller:'EditCategoryOptionsController'})
      .when('/Events',{templateUrl:'views/Event/search.html',controller:'SearchEventController'})
      .when('/Events/new',{templateUrl:'views/Event/detail.html',controller:'NewEventController'})
      .when('/Events/edit/:EventId',{templateUrl:'views/Event/detail.html',controller:'EditEventController'})
      .when('/FeatureOptions',{templateUrl:'views/FeatureOptions/search.html',controller:'SearchFeatureOptionsController'})
      .when('/FeatureOptions/new',{templateUrl:'views/FeatureOptions/detail.html',controller:'NewFeatureOptionsController'})
      .when('/FeatureOptions/edit/:FeatureOptionsId',{templateUrl:'views/FeatureOptions/detail.html',controller:'EditFeatureOptionsController'})
      .when('/Features',{templateUrl:'views/Features/search.html',controller:'SearchFeaturesController'})
      .when('/Features/new',{templateUrl:'views/Features/detail.html',controller:'NewFeaturesController'})
      .when('/Features/edit/:FeaturesId',{templateUrl:'views/Features/detail.html',controller:'EditFeaturesController'})
      .when('/LoyaltyEventDetails',{templateUrl:'views/LoyaltyEventDetails/search.html',controller:'SearchLoyaltyEventDetailsController'})
      .when('/LoyaltyEventDetails/new',{templateUrl:'views/LoyaltyEventDetails/detail.html',controller:'NewLoyaltyEventDetailsController'})
      .when('/LoyaltyEventDetails/edit/:LoyaltyEventDetailsId',{templateUrl:'views/LoyaltyEventDetails/detail.html',controller:'EditLoyaltyEventDetailsController'})
      .when('/LoyaltyProgramMerchants',{templateUrl:'views/LoyaltyProgramMerchant/search.html',controller:'SearchLoyaltyProgramMerchantController'})
      .when('/LoyaltyProgramMerchants/new',{templateUrl:'views/LoyaltyProgramMerchant/detail.html',controller:'NewLoyaltyProgramMerchantController'})
      .when('/LoyaltyProgramMerchants/edit/:LoyaltyProgramMerchantId',{templateUrl:'views/LoyaltyProgramMerchant/detail.html',controller:'EditLoyaltyProgramMerchantController'})
      .when('/LoyaltyProgramTiers',{templateUrl:'views/LoyaltyProgramTier/search.html',controller:'SearchLoyaltyProgramTierController'})
      .when('/LoyaltyProgramTiers/new',{templateUrl:'views/LoyaltyProgramTier/detail.html',controller:'NewLoyaltyProgramTierController'})
      .when('/LoyaltyProgramTiers/edit/:LoyaltyProgramTierId',{templateUrl:'views/LoyaltyProgramTier/detail.html',controller:'EditLoyaltyProgramTierController'})
      .when('/Merchants',{templateUrl:'views/Merchant/search.html',controller:'SearchMerchantController'})
      .when('/Merchants/new',{templateUrl:'views/Merchant/detail.html',controller:'NewMerchantController'})
      .when('/Merchants/edit/:MerchantId',{templateUrl:'views/Merchant/detail.html',controller:'EditMerchantController'})
      .when('/MerchantAddresses',{templateUrl:'views/MerchantAddress/search.html',controller:'SearchMerchantAddressController'})
      .when('/MerchantAddresses/new',{templateUrl:'views/MerchantAddress/detail.html',controller:'NewMerchantAddressController'})
      .when('/MerchantAddresses/edit/:MerchantAddressId',{templateUrl:'views/MerchantAddress/detail.html',controller:'EditMerchantAddressController'})
      .when('/MerchantCategories',{templateUrl:'views/MerchantCategory/search.html',controller:'SearchMerchantCategoryController'})
      .when('/MerchantCategories/new',{templateUrl:'views/MerchantCategory/detail.html',controller:'NewMerchantCategoryController'})
      .when('/MerchantCategories/edit/:MerchantCategoryId',{templateUrl:'views/MerchantCategory/detail.html',controller:'EditMerchantCategoryController'})
      .when('/MerchantFeatures',{templateUrl:'views/MerchantFeatures/search.html',controller:'SearchMerchantFeaturesController'})
      .when('/MerchantFeatures/new',{templateUrl:'views/MerchantFeatures/detail.html',controller:'NewMerchantFeaturesController'})
      .when('/MerchantFeatures/edit/:MerchantFeaturesId',{templateUrl:'views/MerchantFeatures/detail.html',controller:'EditMerchantFeaturesController'})
      .when('/MerchantPaymentGateways',{templateUrl:'views/MerchantPaymentGateway/search.html',controller:'SearchMerchantPaymentGatewayController'})
      .when('/MerchantPaymentGateways/new',{templateUrl:'views/MerchantPaymentGateway/detail.html',controller:'NewMerchantPaymentGatewayController'})
      .when('/MerchantPaymentGateways/edit/:MerchantPaymentGatewayId',{templateUrl:'views/MerchantPaymentGateway/detail.html',controller:'EditMerchantPaymentGatewayController'})
      .when('/MerchantReviews',{templateUrl:'views/MerchantReview/search.html',controller:'SearchMerchantReviewController'})
      .when('/MerchantReviews/new',{templateUrl:'views/MerchantReview/detail.html',controller:'NewMerchantReviewController'})
      .when('/MerchantReviews/edit/:MerchantReviewId',{templateUrl:'views/MerchantReview/detail.html',controller:'EditMerchantReviewController'})
      .when('/Offers',{templateUrl:'views/Offer/search.html',controller:'SearchOfferController'})
      .when('/Offers/new',{templateUrl:'views/Offer/detail.html',controller:'NewOfferController'})
      .when('/Offers/edit/:OfferId',{templateUrl:'views/Offer/detail.html',controller:'EditOfferController'})
      .when('/OptionGroups',{templateUrl:'views/OptionGroups/search.html',controller:'SearchOptionGroupsController'})
      .when('/OptionGroups/new',{templateUrl:'views/OptionGroups/detail.html',controller:'NewOptionGroupsController'})
      .when('/OptionGroups/edit/:OptionGroupsId',{templateUrl:'views/OptionGroups/detail.html',controller:'EditOptionGroupsController'})
      .when('/Options',{templateUrl:'views/Options/search.html',controller:'SearchOptionsController'})
      .when('/Options/new',{templateUrl:'views/Options/detail.html',controller:'NewOptionsController'})
      .when('/Options/edit/:OptionsId',{templateUrl:'views/Options/detail.html',controller:'EditOptionsController'})
      .when('/OrderDetails',{templateUrl:'views/OrderDetails/search.html',controller:'SearchOrderDetailsController'})
      .when('/OrderDetails/new',{templateUrl:'views/OrderDetails/detail.html',controller:'NewOrderDetailsController'})
      .when('/OrderDetails/edit/:OrderDetailsId',{templateUrl:'views/OrderDetails/detail.html',controller:'EditOrderDetailsController'})
      .when('/OrderStatuses',{templateUrl:'views/OrderStatus/search.html',controller:'SearchOrderStatusController'})
      .when('/OrderStatuses/new',{templateUrl:'views/OrderStatus/detail.html',controller:'NewOrderStatusController'})
      .when('/OrderStatuses/edit/:OrderStatusId',{templateUrl:'views/OrderStatus/detail.html',controller:'EditOrderStatusController'})
      .when('/OrderStatusDescs',{templateUrl:'views/OrderStatusDesc/search.html',controller:'SearchOrderStatusDescController'})
      .when('/OrderStatusDescs/new',{templateUrl:'views/OrderStatusDesc/detail.html',controller:'NewOrderStatusDescController'})
      .when('/OrderStatusDescs/edit/:OrderStatusDescId',{templateUrl:'views/OrderStatusDesc/detail.html',controller:'EditOrderStatusDescController'})
      .when('/Orders',{templateUrl:'views/Orders/search.html',controller:'SearchOrdersController'})
      .when('/Orders/new',{templateUrl:'views/Orders/detail.html',controller:'NewOrdersController'})
      .when('/Orders/edit/:OrdersId',{templateUrl:'views/Orders/detail.html',controller:'EditOrdersController'})
      .when('/PaymentGateways',{templateUrl:'views/PaymentGateway/search.html',controller:'SearchPaymentGatewayController'})
      .when('/PaymentGateways/new',{templateUrl:'views/PaymentGateway/detail.html',controller:'NewPaymentGatewayController'})
      .when('/PaymentGateways/edit/:PaymentGatewayId',{templateUrl:'views/PaymentGateway/detail.html',controller:'EditPaymentGatewayController'})
      .when('/Products',{templateUrl:'views/Product/search.html',controller:'SearchProductController'})
      .when('/Products/new',{templateUrl:'views/Product/detail.html',controller:'NewProductController'})
      .when('/Products/edit/:ProductId',{templateUrl:'views/Product/detail.html',controller:'EditProductController'})
      .when('/ProductCategories',{templateUrl:'views/ProductCategory/search.html',controller:'SearchProductCategoryController'})
      .when('/ProductCategories/new',{templateUrl:'views/ProductCategory/detail.html',controller:'NewProductCategoryController'})
      .when('/ProductCategories/edit/:ProductCategoryId',{templateUrl:'views/ProductCategory/detail.html',controller:'EditProductCategoryController'})
      .when('/ProductOptions',{templateUrl:'views/ProductOption/search.html',controller:'SearchProductOptionController'})
      .when('/ProductOptions/new',{templateUrl:'views/ProductOption/detail.html',controller:'NewProductOptionController'})
      .when('/ProductOptions/edit/:ProductOptionId',{templateUrl:'views/ProductOption/detail.html',controller:'EditProductOptionController'})
      .when('/ProductReviews',{templateUrl:'views/ProductReview/search.html',controller:'SearchProductReviewController'})
      .when('/ProductReviews/new',{templateUrl:'views/ProductReview/detail.html',controller:'NewProductReviewController'})
      .when('/ProductReviews/edit/:ProductReviewId',{templateUrl:'views/ProductReview/detail.html',controller:'EditProductReviewController'})
      .when('/SequenceKeyTables',{templateUrl:'views/SequenceKeyTable/search.html',controller:'SearchSequenceKeyTableController'})
      .when('/SequenceKeyTables/new',{templateUrl:'views/SequenceKeyTable/detail.html',controller:'NewSequenceKeyTableController'})
      .when('/SequenceKeyTables/edit/:SequenceKeyTableId',{templateUrl:'views/SequenceKeyTable/detail.html',controller:'EditSequenceKeyTableController'})
      .when('/Taxes',{templateUrl:'views/Tax/search.html',controller:'SearchTaxController'})
      .when('/Taxes/new',{templateUrl:'views/Tax/detail.html',controller:'NewTaxController'})
      .when('/Taxes/edit/:TaxId',{templateUrl:'views/Tax/detail.html',controller:'EditTaxController'})
      .when('/TaxRules',{templateUrl:'views/TaxRule/search.html',controller:'SearchTaxRuleController'})
      .when('/TaxRules/new',{templateUrl:'views/TaxRule/detail.html',controller:'NewTaxRuleController'})
      .when('/TaxRules/edit/:TaxRuleId',{templateUrl:'views/TaxRule/detail.html',controller:'EditTaxRuleController'})
      .when('/TaxRuleMerchants',{templateUrl:'views/TaxRuleMerchant/search.html',controller:'SearchTaxRuleMerchantController'})
      .when('/TaxRuleMerchants/new',{templateUrl:'views/TaxRuleMerchant/detail.html',controller:'NewTaxRuleMerchantController'})
      .when('/TaxRuleMerchants/edit/:TaxRuleMerchantId',{templateUrl:'views/TaxRuleMerchant/detail.html',controller:'EditTaxRuleMerchantController'})
      .when('/UserAddresses',{templateUrl:'views/UserAddress/search.html',controller:'SearchUserAddressController'})
      .when('/UserAddresses/new',{templateUrl:'views/UserAddress/detail.html',controller:'NewUserAddressController'})
      .when('/UserAddresses/edit/:UserAddressId',{templateUrl:'views/UserAddress/detail.html',controller:'EditUserAddressController'})
      .when('/UserFavourites',{templateUrl:'views/UserFavourites/search.html',controller:'SearchUserFavouritesController'})
      .when('/UserFavourites/new',{templateUrl:'views/UserFavourites/detail.html',controller:'NewUserFavouritesController'})
      .when('/UserFavourites/edit/:UserFavouritesId',{templateUrl:'views/UserFavourites/detail.html',controller:'EditUserFavouritesController'})
      .when('/UserRewards',{templateUrl:'views/UserRewards/search.html',controller:'SearchUserRewardsController'})
      .when('/UserRewards/new',{templateUrl:'views/UserRewards/detail.html',controller:'NewUserRewardsController'})
      .when('/UserRewards/edit/:UserRewardsId',{templateUrl:'views/UserRewards/detail.html',controller:'EditUserRewardsController'})
      .when('/Users',{templateUrl:'views/Users/search.html',controller:'SearchUsersController'})
      .when('/Users/new',{templateUrl:'views/Users/detail.html',controller:'NewUsersController'})
      .when('/Users/edit/:UsersId',{templateUrl:'views/Users/detail.html',controller:'EditUsersController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
