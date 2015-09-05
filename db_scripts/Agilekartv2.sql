CREATE DATABASE  IF NOT EXISTS `agilekartv2` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `agilekartv2`;
-- MySQL dump 10.13  Distrib 5.6.23, for Win64 (x86_64)
--
-- Host: localhost    Database: agilekartv2
-- ------------------------------------------------------
-- Server version	5.6.24-enterprise-commercial-advanced-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `category_id` varchar(45) NOT NULL,
  `category_name` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES ('CAT1','Starter','abc','2015-07-12 18:30:00'),('CAT2','Main Course','abc','2015-07-12 18:30:00'),('CAT3','Popular Dishes','abc','2015-07-12 18:30:00'),('CAT4','Dessert','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_options`
--

DROP TABLE IF EXISTS `category_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category_options` (
  `category_options_id` varchar(45) NOT NULL,
  `category_id` varchar(45) DEFAULT NULL,
  `option_group_id` varchar(45) DEFAULT NULL,
  `last_update_user_id` varchar(45) DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`category_options_id`),
  KEY `fk_category_id0_idx` (`category_id`),
  KEY `fk_option_group_id0_idx` (`option_group_id`),
  CONSTRAINT `fk_category_id0` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_option_group_id0` FOREIGN KEY (`option_group_id`) REFERENCES `option_groups` (`option_group_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_options`
--

LOCK TABLES `category_options` WRITE;
/*!40000 ALTER TABLE `category_options` DISABLE KEYS */;
INSERT INTO `category_options` VALUES ('COP16','CAT1','OPTGRP2','ABC','2015-08-23 10:31:39'),('COP18','CAT2','OPTGRP1','ABC','2015-08-23 13:58:36');
/*!40000 ALTER TABLE `category_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `event` (
  `event_id` varchar(45) NOT NULL,
  `event_name` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `event_desc` varchar(500) CHARACTER SET latin1 DEFAULT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES ('EVT1','Birthday','Birthday of the registered user','abc','2015-07-12 18:30:00'),('EVT2','New User','New registration of user account','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feature_options`
--

DROP TABLE IF EXISTS `feature_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `feature_options` (
  `feature_options_id` varchar(45) NOT NULL,
  `feature_id` varchar(45) NOT NULL,
  `feature_option_name` varchar(45) DEFAULT NULL,
  `last_update_user_id` varchar(45) DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`feature_options_id`),
  KEY `fk_feature_id0_idx` (`feature_id`),
  CONSTRAINT `fk_feature_id0` FOREIGN KEY (`feature_id`) REFERENCES `features` (`feature_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feature_options`
--

LOCK TABLES `feature_options` WRITE;
/*!40000 ALTER TABLE `feature_options` DISABLE KEYS */;
INSERT INTO `feature_options` VALUES ('FEATOPT1','FEAT1','Preorder available','abc','2015-07-12 18:30:00'),('FEATOPT2','FEAT1','Deals','abc','2015-07-12 18:30:00'),('FEATOPT3','FEAT2','Mexican','abc','2015-07-12 18:30:00'),('FEATOPT4','FEAT2','Italian','abc','2015-07-12 18:30:00'),('FEATOPT5','FEAT3','Delivery','abc','2015-07-12 18:30:00'),('FEATOPT6','FEAT3','Pickup','abc','2015-07-12 18:30:00'),('FEATOPT7','FEAT4','4 Star','abc','2015-07-12 18:30:00'),('FEATOPT8','FEAT4','3 Star','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `feature_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `features`
--

DROP TABLE IF EXISTS `features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `features` (
  `feature_id` varchar(45) NOT NULL,
  `feature_name` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`feature_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `features`
--

LOCK TABLES `features` WRITE;
/*!40000 ALTER TABLE `features` DISABLE KEYS */;
INSERT INTO `features` VALUES ('FEAT1','General','abc','2015-07-12 18:30:00'),('FEAT2','Cuisine','abc','2015-07-12 18:30:00'),('FEAT3','Order Type','abc','2015-07-12 18:30:00'),('FEAT4','Rating','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loyalty_event_details`
--

DROP TABLE IF EXISTS `loyalty_event_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `loyalty_event_details` (
  `loyalty_event_details_id` varchar(45) NOT NULL,
  `event_id` varchar(45) NOT NULL,
  `tier_id` varchar(45) NOT NULL,
  `points_earned` int(12) DEFAULT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`loyalty_event_details_id`),
  KEY `fk_event_id0_idx` (`event_id`),
  KEY `fk_tier_id0_idx` (`tier_id`),
  CONSTRAINT `fk_event_id0` FOREIGN KEY (`event_id`) REFERENCES `event` (`event_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tier_id0` FOREIGN KEY (`tier_id`) REFERENCES `loyalty_program_tier` (`tier_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loyalty_event_details`
--

LOCK TABLES `loyalty_event_details` WRITE;
/*!40000 ALTER TABLE `loyalty_event_details` DISABLE KEYS */;
INSERT INTO `loyalty_event_details` VALUES ('LOYEVT1','EVT1','TIER3',45,'ABC','2015-09-03 20:10:43'),('LOYEVTDET1','EVT1','TIER1',10000,'abc','2015-07-12 18:30:00'),('LOYEVTDET2','EVT1','TIER2',7500,'abc','2015-07-12 18:30:00'),('LOYEVTDET3','EVT2','TIER3',500,'abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `loyalty_event_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loyalty_program_merchant`
--

DROP TABLE IF EXISTS `loyalty_program_merchant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `loyalty_program_merchant` (
  `loyalty_program_merchant_id` varchar(45) NOT NULL,
  `merchant_id` varchar(45) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `program_participate_flag` char(1) CHARACTER SET latin1 DEFAULT NULL,
  `amount_spent` float DEFAULT NULL,
  `points_earned` int(11) DEFAULT NULL,
  `points_redeemed` int(11) DEFAULT NULL,
  `amount_redeemed` float DEFAULT NULL,
  `min_amount_spent` float DEFAULT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`loyalty_program_merchant_id`),
  KEY `fk_merchant_id2_idx` (`merchant_id`),
  CONSTRAINT `fk_merchant_id2` FOREIGN KEY (`merchant_id`) REFERENCES `merchant` (`merchant_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loyalty_program_merchant`
--

LOCK TABLES `loyalty_program_merchant` WRITE;
/*!40000 ALTER TABLE `loyalty_program_merchant` DISABLE KEYS */;
INSERT INTO `loyalty_program_merchant` VALUES ('LOYPRG1','MERCHANT1','2015-01-01',NULL,'Y',1,25,50,1,20,'abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `loyalty_program_merchant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loyalty_program_tier`
--

DROP TABLE IF EXISTS `loyalty_program_tier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `loyalty_program_tier` (
  `tier_id` varchar(45) NOT NULL,
  `tier_name` varchar(45) CHARACTER SET latin1 NOT NULL,
  `tier_min_points` int(11) DEFAULT NULL,
  `tier_max_points` int(11) DEFAULT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tier_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loyalty_program_tier`
--

LOCK TABLES `loyalty_program_tier` WRITE;
/*!40000 ALTER TABLE `loyalty_program_tier` DISABLE KEYS */;
INSERT INTO `loyalty_program_tier` VALUES ('TIER1','Platinum',75001,2147483647,'abc','2015-07-12 18:30:00'),('TIER2','Gold',50001,75000,'abc','2015-07-12 18:30:00'),('TIER3','Silver',25001,50000,'abc','2015-07-12 18:30:00'),('TIER4','Bronze',10001,25000,'abc','2015-07-12 18:30:00'),('TIER5','Basic',0,10000,'abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `loyalty_program_tier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `merchant`
--

DROP TABLE IF EXISTS `merchant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `merchant` (
  `merchant_id` varchar(45) NOT NULL,
  `merchant_name` varchar(50) NOT NULL,
  `merchant_email` varchar(500) NOT NULL,
  `merchant_phone_no` varchar(15) DEFAULT NULL,
  `merchant_email_verified` tinyint(1) DEFAULT NULL,
  `merchant_verification_code` varchar(20) DEFAULT NULL,
  `min_order` int(11) DEFAULT NULL,
  `delivery_time` int(11) DEFAULT NULL,
  `merchant_rating` int(11) DEFAULT NULL,
  `last_update_user_id` varchar(45) DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`merchant_id`),
  UNIQUE KEY `UK_OPTION_NM_GROUP_ID` (`merchant_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table holds the participating restaurant details of agilekartv2 application.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `merchant`
--

LOCK TABLES `merchant` WRITE;
/*!40000 ALTER TABLE `merchant` DISABLE KEYS */;
INSERT INTO `merchant` VALUES ('MERCHANT1','Basil with a twist','basil@gmail.com','9876543123',1,'q23hgh',1,90,5,'abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `merchant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `merchant_address`
--

DROP TABLE IF EXISTS `merchant_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `merchant_address` (
  `merchant_address_id` varchar(45) NOT NULL,
  `merchant_address` varchar(100) DEFAULT NULL,
  `merchant_address2` varchar(50) DEFAULT NULL,
  `merchant_city` varchar(90) DEFAULT NULL,
  `merchant_country` varchar(20) DEFAULT NULL,
  `merchant_fax` varchar(20) DEFAULT NULL,
  `merchant_first_name` varchar(50) DEFAULT NULL,
  `merchant_last_name` varchar(50) DEFAULT NULL,
  `merchant_phone` varchar(20) DEFAULT NULL,
  `merchant_state` varchar(20) DEFAULT NULL,
  `address_type_name` varchar(50) DEFAULT NULL,
  `merchant_zip` varchar(12) DEFAULT NULL,
  `merchant_id` varchar(45) NOT NULL,
  `last_update_user_id` varchar(45) DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`merchant_address_id`),
  KEY `fk_merchant_id0_idx` (`merchant_id`),
  CONSTRAINT `fk_merchant_id0` FOREIGN KEY (`merchant_id`) REFERENCES `merchant` (`merchant_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table store the address added by the restaurant';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `merchant_address`
--

LOCK TABLES `merchant_address` WRITE;
/*!40000 ALTER TABLE `merchant_address` DISABLE KEYS */;
INSERT INTO `merchant_address` VALUES ('MERCHANTADR1','83 Morgan street','Suite 120','Stamford','US','6574321888','Basil with a \n\ntwist',NULL,'5644489999','CT','Office','06905','MERCHANT1','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `merchant_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `merchant_category`
--

DROP TABLE IF EXISTS `merchant_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `merchant_category` (
  `merchant_category_id` varchar(45) NOT NULL,
  `category_id` varchar(45) NOT NULL,
  `merchant_id` varchar(45) NOT NULL,
  `last_update_user_id` varchar(45) DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`merchant_category_id`),
  KEY `fk_merchant_id1_idx` (`merchant_id`),
  KEY `fk_category_id1_idx` (`category_id`),
  CONSTRAINT `fk_category_id1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_merchant_id1` FOREIGN KEY (`merchant_id`) REFERENCES `merchant` (`merchant_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `merchant_category`
--

LOCK TABLES `merchant_category` WRITE;
/*!40000 ALTER TABLE `merchant_category` DISABLE KEYS */;
INSERT INTO `merchant_category` VALUES ('MERCHANTCAT1','CAT1','MERCHANT1','abc','2015-07-12 18:30:00'),('MERCHANTCAT2','CAT2','MERCHANT1','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `merchant_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `merchant_features`
--

DROP TABLE IF EXISTS `merchant_features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `merchant_features` (
  `merchant_features_id` varchar(45) NOT NULL,
  `merchant_id` varchar(45) NOT NULL,
  `feature_options_id` varchar(45) NOT NULL,
  `feature_id` varchar(45) NOT NULL,
  `last_update_user_id` varchar(45) DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`merchant_features_id`),
  KEY `fk_merchant_id5_idx` (`merchant_id`),
  KEY `fk_feature_option_id1_idx` (`feature_options_id`),
  KEY `fk_feature_id2_idx` (`feature_id`),
  CONSTRAINT `fk_feature_id2` FOREIGN KEY (`feature_id`) REFERENCES `features` (`feature_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_feature_option_id2` FOREIGN KEY (`feature_options_id`) REFERENCES `feature_options` (`feature_options_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_merchant_id5` FOREIGN KEY (`merchant_id`) REFERENCES `merchant` (`merchant_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `merchant_features`
--

LOCK TABLES `merchant_features` WRITE;
/*!40000 ALTER TABLE `merchant_features` DISABLE KEYS */;
INSERT INTO `merchant_features` VALUES ('MERCHANTFEAT1','MERCHANT1','FEATOPT1','FEAT1','abc','2015-07-12 18:30:00'),('MERCHANTFEAT2','MERCHANT1','FEATOPT2','FEAT1','abc','2015-07-12 18:30:00'),('MERCHANTFEAT3','MERCHANT1','FEATOPT3','FEAT2','abc','2015-07-12 18:30:00'),('MERCHANTFEAT4','MERCHANT1','FEATOPT4','FEAT2','abc','2015-07-12 18:30:00'),('MERCHANTFEAT5','MERCHANT1','FEATOPT5','FEAT3','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `merchant_features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `merchant_payment_gateway`
--

DROP TABLE IF EXISTS `merchant_payment_gateway`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `merchant_payment_gateway` (
  `merchant_payment_gateway_id` varchar(45) NOT NULL,
  `payment_gateway_id` varchar(45) NOT NULL,
  `merchant_id` varchar(45) NOT NULL,
  `last_update_user_id` varchar(45) DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`merchant_payment_gateway_id`),
  KEY `fk_merchant_id3_idx` (`merchant_id`),
  KEY `fk_payment_gateway_id0_idx` (`payment_gateway_id`),
  CONSTRAINT `fk_merchant_id3` FOREIGN KEY (`merchant_id`) REFERENCES `merchant` (`merchant_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_payment_gateway_id0` FOREIGN KEY (`payment_gateway_id`) REFERENCES `payment_gateway` (`payment_gateway_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `merchant_payment_gateway`
--

LOCK TABLES `merchant_payment_gateway` WRITE;
/*!40000 ALTER TABLE `merchant_payment_gateway` DISABLE KEYS */;
INSERT INTO `merchant_payment_gateway` VALUES ('MERCHANTPAY1','PYMTGT1','MERCHANT1','abc','2015-07-12 18:30:00'),('MERPAYGAT1','PYMTGT2','MERCHANT1','ABC','2015-09-03 19:06:38');
/*!40000 ALTER TABLE `merchant_payment_gateway` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `merchant_review`
--

DROP TABLE IF EXISTS `merchant_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `merchant_review` (
  `merchant_review_id` varchar(45) NOT NULL,
  `merchant_review` varchar(150) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `merchant_id` varchar(45) NOT NULL,
  `user_id` varchar(45) NOT NULL,
  `merchant_rating` int(11) DEFAULT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`merchant_review_id`),
  KEY `fk_merchant_id6_idx` (`merchant_id`),
  KEY `fk_user_id17_idx` (`user_id`),
  CONSTRAINT `fk_merchant_id6` FOREIGN KEY (`merchant_id`) REFERENCES `merchant` (`merchant_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_id17` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table holds the restaurant review data of agilekartv2 application';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `merchant_review`
--

LOCK TABLES `merchant_review` WRITE;
/*!40000 ALTER TABLE `merchant_review` DISABLE KEYS */;
INSERT INTO `merchant_review` VALUES ('MERCHANTREV1','Awesome food','MERCHANT1','abc',4,'abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `merchant_review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offer`
--

DROP TABLE IF EXISTS `offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `offer` (
  `offer_id` varchar(45) NOT NULL,
  `offer_name` varchar(45) CHARACTER SET latin1 NOT NULL,
  `offer_discount_pct` int(11) DEFAULT NULL,
  `offer_start_date` date DEFAULT NULL,
  `offer_end_date` date DEFAULT NULL,
  `merchant_id` varchar(45) DEFAULT NULL,
  `product_id` varchar(45) DEFAULT NULL,
  `offer_max_count` int(11) DEFAULT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`offer_id`),
  KEY `fk_merchant_id7_idx` (`merchant_id`),
  KEY `fk_product_id2_idx` (`product_id`),
  CONSTRAINT `fk_merchant_id7` FOREIGN KEY (`merchant_id`) REFERENCES `merchant` (`merchant_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_id2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offer`
--

LOCK TABLES `offer` WRITE;
/*!40000 ALTER TABLE `offer` DISABLE KEYS */;
INSERT INTO `offer` VALUES ('OFFER1','PROMO50',50,'2015-01-01','2015-08-31','MERCHANT1','PDCT1',NULL,'abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `offer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `option_groups`
--

DROP TABLE IF EXISTS `option_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `option_groups` (
  `option_group_id` varchar(45) NOT NULL,
  `option_group_name` varchar(50) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `option_group_desc` varchar(45) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`option_group_id`),
  UNIQUE KEY `option_group_desc_UNIQUE` (`option_group_desc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table holds the product option groups  information of agilekartv2 application.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `option_groups`
--

LOCK TABLES `option_groups` WRITE;
/*!40000 ALTER TABLE `option_groups` DISABLE KEYS */;
INSERT INTO `option_groups` VALUES ('OPTGRP1','Spice Level','Choice of spice level','abc','2015-07-12 18:30:00'),('OPTGRP2','Rice','Choice of rice','abc','2015-07-12 18:30:00'),('OPTGRP3','Bread','Choice of bread','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `option_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `options`
--

DROP TABLE IF EXISTS `options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `options` (
  `option_id` varchar(45) NOT NULL,
  `option_group_id` varchar(45) NOT NULL,
  `option_name` varchar(50) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`option_id`),
  UNIQUE KEY `UK_OPTION_NM_GROUP_ID` (`option_name`,`option_group_id`),
  KEY `fk_option_group_id2_idx` (`option_group_id`),
  CONSTRAINT `fk_option_group_id2` FOREIGN KEY (`option_group_id`) REFERENCES `option_groups` (`option_group_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table holds the options of agilekartv2 application.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `options`
--

LOCK TABLES `options` WRITE;
/*!40000 ALTER TABLE `options` DISABLE KEYS */;
INSERT INTO `options` VALUES ('OPT1','OPTGRP1','Mild','abc','2015-07-12 18:30:00'),('OPT2','OPTGRP1','Medium','abc','2015-07-12 18:30:00'),('OPT3','OPTGRP1','Spicy','abc','2015-07-12 18:30:00'),('OPT4','OPTGRP2','Brown rice','abc','2015-07-12 18:30:00'),('OPT5','OPTGRP2','White rice','abc','2015-07-12 18:30:00'),('OPT6','OPTGRP3','White bread','abc','2015-07-12 18:30:00'),('OPT7','OPTGRP3','Brown bread','abc','2015-07-12 18:30:00'),('OPT8','OPTGRP3','Multigrain bread','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_details` (
  `detail_id` varchar(45) NOT NULL,
  `order_id` varchar(45) NOT NULL,
  `product_id` varchar(45) NOT NULL,
  `detail_name` varchar(250) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `detail_price` float NOT NULL,
  `detail_quantity` int(11) NOT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`detail_id`),
  KEY `fk_order_id4_idx` (`order_id`),
  KEY `fk_product_id4_idx` (`product_id`),
  CONSTRAINT `fk_order_id4` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_id4` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table holds the order detail information agilekartv2 application.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES ('ORDDET1','ORDER1','PDCT1','Soup',5,2,'abc','2015-07-12 18:30:00'),('ORDDET2','ORDER1','PDCT3','Sandwich',6.98,1,'abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_status`
--

DROP TABLE IF EXISTS `order_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_status` (
  `order_status_id` varchar(45) NOT NULL,
  `order_id` varchar(45) NOT NULL,
  `order_status_desc_id` varchar(45) NOT NULL,
  `order_status_comment` varchar(500) DEFAULT NULL,
  `order_status_is_active` char(1) DEFAULT NULL,
  `last_update_user_id` varchar(45) DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`order_status_id`),
  KEY `fk_order_id3_idx` (`order_id`),
  KEY `fk_order_status_desc_id3_idx` (`order_status_desc_id`),
  CONSTRAINT `fk_order_id3` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_status_desc_id3` FOREIGN KEY (`order_status_desc_id`) REFERENCES `order_status_desc` (`order_status_desc_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_status`
--

LOCK TABLES `order_status` WRITE;
/*!40000 ALTER TABLE `order_status` DISABLE KEYS */;
INSERT INTO `order_status` VALUES ('ORDSTATUS1','ORDER1','ORDSTDESC1','In process','Y','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `order_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_status_desc`
--

DROP TABLE IF EXISTS `order_status_desc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_status_desc` (
  `order_status_desc_id` varchar(45) NOT NULL,
  `order_status_desc_text` varchar(500) DEFAULT NULL,
  `last_update_user_id` varchar(45) DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`order_status_desc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_status_desc`
--

LOCK TABLES `order_status_desc` WRITE;
/*!40000 ALTER TABLE `order_status_desc` DISABLE KEYS */;
INSERT INTO `order_status_desc` VALUES ('ORDSTDESC1','In process','abc','2015-07-12 18:30:00'),('ORDSTDESC2','Out for delivery','abc','2015-07-12 18:30:00'),('ORDSTDESC3','Ready for \n\npickup','abc','2015-07-12 18:30:00'),('ORDSTDESC4','Delivered','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `order_status_desc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `order_id` varchar(45) NOT NULL,
  `user_id` varchar(45) NOT NULL,
  `order_amount` float NOT NULL,
  `order_ship_name` varchar(100) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_ship_address` varchar(100) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_ship_address2` varchar(100) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_city` varchar(50) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_state` varchar(50) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_zip` varchar(20) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_country` varchar(50) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_phone` varchar(20) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_fax` varchar(20) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_shipping` float NOT NULL,
  `order_tax` float NOT NULL,
  `order_bill_name` varchar(100) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_bill_address` varchar(100) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_bill_address2` varchar(100) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_bill_city` varchar(50) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_bill_state` varchar(50) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_bill_zip` varchar(20) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_bill_country` varchar(50) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_bill_phone` varchar(20) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_bill_fax` varchar(20) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_payment_mode` varchar(50) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_payment_desc` varchar(50) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `order_email` varchar(100) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `order_shipped` tinyint(1) NOT NULL DEFAULT '0',
  `order_tracking_no` varchar(80) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `order_type` varchar(45) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `order_placed_time` timestamp NULL DEFAULT NULL,
  `order_pickup_time` timestamp NULL DEFAULT NULL,
  `payment_gateway_id` varchar(45) DEFAULT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `fk_user_id3_idx` (`user_id`),
  KEY `fk_payment_gateway_id2_idx` (`payment_gateway_id`),
  CONSTRAINT `fk_payment_gateway_id2` FOREIGN KEY (`payment_gateway_id`) REFERENCES `payment_gateway` (`payment_gateway_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_id3` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table holds the order information agilekartv2 application.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES ('ORDER1','abc',17,'John Doe','83 Morgan Street','Apt 10J','Stamford','CT','06905','US','876544444','',0,2.8,'John Doe','83 Morgan Street','Apt \n\n10J','Stamford','CT','06905','US','8777790','','Paypal','pay by paypal','abc@gmail.com','2015-07-14 15:02:00',0,NULL,'Delivery','0000-00-00 00:00:00',NULL,'PYMTGT1','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_gateway`
--

DROP TABLE IF EXISTS `payment_gateway`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_gateway` (
  `payment_gateway_id` varchar(45) NOT NULL,
  `payment_gateway_name` varchar(45) DEFAULT NULL,
  `payment_gateway_desc` varchar(500) DEFAULT NULL,
  `last_update_user_id` varchar(45) DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`payment_gateway_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_gateway`
--

LOCK TABLES `payment_gateway` WRITE;
/*!40000 ALTER TABLE `payment_gateway` DISABLE KEYS */;
INSERT INTO `payment_gateway` VALUES ('PYMTGT1','Paypal','Pay through paypal','abc','2015-07-12 18:30:00'),('PYMTGT2','PayTM','Pay through payTM','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `payment_gateway` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `product_id` varchar(45) NOT NULL,
  `product_name` varchar(100) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `product_price` float NOT NULL,
  `product_weight` float NOT NULL,
  `product_cart_desc` varchar(250) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `product_short_desc` varchar(1000) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `product_long_desc` varchar(4000) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `product_thumb` varchar(100) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `product_image` varchar(100) CHARACTER SET latin1 COLLATE latin1_german2_ci NOT NULL,
  `merchant_id` varchar(45) NOT NULL,
  `product_stock` float DEFAULT NULL,
  `product_discount_percentage` float DEFAULT NULL,
  `product_unlimited` tinyint(1) DEFAULT NULL,
  `product_hit_count` int(12) DEFAULT '0',
  `product_sold_count` int(12) DEFAULT '0',
  `last_update_user_id` varchar(45) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `fk_merchant_id11_idx` (`merchant_id`),
  CONSTRAINT `fk_merchant_id11` FOREIGN KEY (`merchant_id`) REFERENCES `merchant` (`merchant_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table holds the product information of agilekartv2 application.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('PDCT1','Hot & Sour Chicken Soup',5,1,'Chicken soup','Hot & Sour chicken soup','Hot & Sour chicken soup made from the finest of \n\ningredients','','','MERCHANT1',1,NULL,NULL,10,76,'abc','2015-07-12 18:30:00'),('PDCT2','Hot & Sour Veg Soup',4.5,1,'Veg soup','Hot & Sour veg soup','Hot & Sour veg soup made from the \n\nfinest of ingredients','','','MERCHANT1',1,NULL,NULL,20,56,'abc','2015-07-12 18:30:00'),('PDCT3','Caprese Panini',6.98,1,'Caprese Panini','Tomato & Mozarella','Tomato, Mozarella grilled \n\nsandwich','','','MERCHANT1',1,NULL,NULL,40,156,'abc','2015-07-12 18:30:00'),('PDCT4','Hamburger',7.98,1,'Hamburger','Tomato & Mozarella','Finest Ham burgerr served with \n\nfries','','','MERCHANT1',1,NULL,NULL,45,86,'abc','2015-07-12 18:30:00'),('PDCT5','Tiramisu',7.98,1,'Tiramisu','Tiramisu','Tiramisu','','','MERCHANT1',1,NULL,NULL,48,186,'abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_category` (
  `product_category_id` varchar(45) NOT NULL,
  `product_id` varchar(45) NOT NULL,
  `category_id` varchar(45) NOT NULL,
  `last_update_user_id` varchar(45) DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`product_category_id`),
  KEY `fk_product_id2_idx` (`product_id`),
  KEY `fk_category_id5_idx` (`category_id`),
  KEY `fk_product_id5_idx` (`product_id`),
  KEY `fk_category_id6_idx` (`category_id`),
  CONSTRAINT `fk_category_id6` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_id5` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES ('PDCTCAT1','PDCT1','CAT1','abc','2015-07-12 18:30:00'),('PDCTCAT2','PDCT1','CAT3','abc','2015-07-12 18:30:00'),('PDCTCAT3','PDCT2','CAT1','abc','2015-07-12 18:30:00'),('PDCTCAT4','PDCT3','CAT3','abc','2015-07-12 18:30:00'),('PDCTCAT5','PDCT3','CAT2','abc','2015-07-12 18:30:00'),('PDCTCAT6','PDCT4','CAT2','abc','2015-07-12 18:30:00'),('PDCTCAT7','PDCT5','CAT3','abc','2015-07-12 18:30:00'),('PDCTCAT8','PDCT5','CAT4','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_option`
--

DROP TABLE IF EXISTS `product_option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_option` (
  `product_option_id` varchar(45) NOT NULL,
  `product_id` varchar(45) NOT NULL,
  `option_group_id` varchar(45) NOT NULL,
  `option_id` varchar(45) NOT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`product_option_id`),
  KEY `fk_product_id7_idx` (`product_id`),
  KEY `fk_option_group_id7_idx` (`option_group_id`),
  KEY `fk_option_id7_idx` (`option_id`),
  CONSTRAINT `fk_option_group_id7` FOREIGN KEY (`option_group_id`) REFERENCES `option_groups` (`option_group_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_option_id7` FOREIGN KEY (`option_id`) REFERENCES `options` (`option_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_id7` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_option`
--

LOCK TABLES `product_option` WRITE;
/*!40000 ALTER TABLE `product_option` DISABLE KEYS */;
INSERT INTO `product_option` VALUES ('PDCTOPT1','PDCT1','OPTGRP1','OPT1','abc','2015-07-12 18:30:00'),('PDCTOPT10','PDCT3','OPTGRP3','OPT6','abc','2015-07-12 18:30:00'),('PDCTOPT11','PDCT3','OPTGRP3','OPT7','abc','2015-07-12 18:30:00'),('PDCTOPT12','PDCT3','OPTGRP3','OPT8','abc','2015-07-12 18:30:00'),('PDCTOPT13','PDCT4','OPTGRP1','OPT1','abc','0000-00-00 00:00:00'),('PDCTOPT14','PDCT4','OPTGRP1','OPT2','abc','2015-07-12 18:30:00'),('PDCTOPT15','PDCT4','OPTGRP1','OPT3','abc','2015-07-12 18:30:00'),('PDCTOPT16','PDCT4','OPTGRP3','OPT6','abc','2015-07-12 18:30:00'),('PDCTOPT17','PDCT4','OPTGRP3','OPT7','abc','2015-07-12 18:30:00'),('PDCTOPT18','PDCT4','OPTGRP3','OPT8','abc','0000-00-00 00:00:00'),('PDCTOPT2','PDCT1','OPTGRP1','OPT2','abc','2015-07-12 18:30:00'),('PDCTOPT3','PDCT1','OPTGRP1','OPT3','abc','2015-07-12 18:30:00'),('PDCTOPT4','PDCT2','OPTGRP1','OPT1','abc','2015-07-12 18:30:00'),('PDCTOPT5','PDCT2','OPTGRP1','OPT2','abc','2015-07-12 18:30:00'),('PDCTOPT6','PDCT2','OPTGRP1','OPT3','abc','2015-07-12 18:30:00'),('PDCTOPT7','PDCT3','OPTGRP1','OPT1','abc','2015-07-12 18:30:00'),('PDCTOPT8','PDCT3','OPTGRP1','OPT2','abc','2015-07-12 18:30:00'),('PDCTOPT9','PDCT3','OPTGRP1','OPT3','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `product_option` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_review`
--

DROP TABLE IF EXISTS `product_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_review` (
  `product_review_id` varchar(45) NOT NULL,
  `user_id` varchar(45) NOT NULL,
  `product_id` varchar(45) NOT NULL,
  `product_rating` int(11) DEFAULT NULL,
  `product_review_comment` varchar(500) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`product_review_id`),
  KEY `fk_user_id_idx4` (`user_id`),
  KEY `fk_product_id8_idx` (`product_id`),
  CONSTRAINT `fk_product_id8` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_id5` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table holds the user information of agilekartv2 application.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_review`
--

LOCK TABLES `product_review` WRITE;
/*!40000 ALTER TABLE `product_review` DISABLE KEYS */;
INSERT INTO `product_review` VALUES ('PDCTREV1','abc','PDCT1',4,'Excellent','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `product_review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequence_key_table`
--

DROP TABLE IF EXISTS `sequence_key_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sequence_key_table` (
  `table_Id` int(11) NOT NULL,
  `table_Name` varchar(45) NOT NULL,
  `key_Prefix` varchar(45) NOT NULL,
  `max_Count` int(11) NOT NULL,
  PRIMARY KEY (`table_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequence_key_table`
--

LOCK TABLES `sequence_key_table` WRITE;
/*!40000 ALTER TABLE `sequence_key_table` DISABLE KEYS */;
INSERT INTO `sequence_key_table` VALUES (1,'Category','CAT',5),(2,'Category Option','CATOPT',2),(3,'Feature Option','FEAOPT',1),(4,'Feature','FEA',2),(5,'Loyayity Event','LOYEVT',3),(6,'Loyality Program Merchant','LOYPGMMER',1),(7,'Loyayity Program Tier','LOYPGMTIR',2),(8,'Merchant Address','MERADR',2),(9,'Merchant Category','MERCAT',3),(10,'Merchant','MER',2),(11,'Merchant Feature','MERFEA',2),(12,'Merchant Payment Gateway','MERPAYGAT',2),(13,'Merchant Review','MERREV',2),(14,'Offer','OFR',2),(15,'Option Groups','OPTGRP',11),(16,'Options ','OPT',11),(17,'Order Details','ODRDET',1),(18,'Order','ODR',1),(19,'Order Status','ODRSTA',2),(20,'Order Status Desc','ODRSTADES',2),(21,'Payment Gateway','PAYGAT',1),(22,'Product Category','PDTCAT',2),(23,'Product','PDT',2),(24,'Product Review','PDTRVW',2),(25,'Tax','TAX',1),(26,'Tax Rule','TAXRUL',1),(27,'Tax Merchant','TAXMER',2),(28,'User Address','USRADR',1),(29,'User Favourties','USRFAV',1),(30,'User Rewards','USRRWD',1),(31,'Users','USR',1),(32,'Product Option','PDTOPT',4),(33,'Event','EVT',4);
/*!40000 ALTER TABLE `sequence_key_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tax`
--

DROP TABLE IF EXISTS `tax`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tax` (
  `tax_id` varchar(45) NOT NULL,
  `tax_rate` float DEFAULT NULL,
  `tax_is_active` tinyint(4) DEFAULT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tax_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tax`
--

LOCK TABLES `tax` WRITE;
/*!40000 ALTER TABLE `tax` DISABLE KEYS */;
INSERT INTO `tax` VALUES ('TAX1',20,1,'abc','2015-07-12 18:30:00'),('TAX2',14,1,'abc','2015-07-12 18:30:00'),('TAX3',5.6,1,'abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `tax` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tax_rule`
--

DROP TABLE IF EXISTS `tax_rule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tax_rule` (
  `tax_rule_id` varchar(45) NOT NULL,
  `tax_id` varchar(45) NOT NULL,
  `tax_rule_name` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `state_cd` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `country_cd` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tax_rule_id`),
  KEY `fk_tax_id0_idx` (`tax_id`),
  CONSTRAINT `fk_tax_id0` FOREIGN KEY (`tax_id`) REFERENCES `tax` (`tax_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tax_rule`
--

LOCK TABLES `tax_rule` WRITE;
/*!40000 ALTER TABLE `tax_rule` DISABLE KEYS */;
INSERT INTO `tax_rule` VALUES ('TAXRULE1','TAX1','State Tax','CT','US','abc','2015-07-12 18:30:00'),('TAXRULE2','TAX1','State Tax','NY','US','abc','2015-07-12 18:30:00'),('TAXRULE3','TAX2','Luxury Tax',NULL,NULL,'abc','2015-07-12 18:30:00'),('TAXRULE4','TAX3','Service Tax',NULL,NULL,'abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `tax_rule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tax_rule_merchant`
--

DROP TABLE IF EXISTS `tax_rule_merchant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tax_rule_merchant` (
  `tax_rule_merchant_id` varchar(45) NOT NULL,
  `tax_rule_id` varchar(45) NOT NULL,
  `merchant_id` varchar(45) NOT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tax_rule_merchant_id`),
  KEY `fk_merchant_id8_idx` (`merchant_id`),
  KEY `fk_tax_rule_id0_idx` (`tax_rule_id`),
  CONSTRAINT `fk_merchant_id8` FOREIGN KEY (`merchant_id`) REFERENCES `merchant` (`merchant_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tax_rule_id0` FOREIGN KEY (`tax_rule_id`) REFERENCES `tax_rule` (`tax_rule_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tax_rule_merchant`
--

LOCK TABLES `tax_rule_merchant` WRITE;
/*!40000 ALTER TABLE `tax_rule_merchant` DISABLE KEYS */;
INSERT INTO `tax_rule_merchant` VALUES ('TAXRULMERCHANT1','TAXRULE1','MERCHANT1','abc','2015-07-12 18:30:00'),('TAXRULMERCHANT2','TAXRULE2','MERCHANT1','abc','2015-07-12 18:30:00'),('TAXRULMERCHANT3','TAXRULE4','MERCHANT1','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `tax_rule_merchant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_address`
--

DROP TABLE IF EXISTS `user_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_address` (
  `address_id` varchar(45) NOT NULL,
  `user_address` varchar(100) DEFAULT NULL,
  `user_address2` varchar(50) DEFAULT NULL,
  `user_city` varchar(90) DEFAULT NULL,
  `user_country` varchar(20) DEFAULT NULL,
  `user_fax` varchar(20) DEFAULT NULL,
  `user_first_name` varchar(50) DEFAULT NULL,
  `user_last_name` varchar(50) DEFAULT NULL,
  `user_phone` varchar(20) DEFAULT NULL,
  `user_state` varchar(20) DEFAULT NULL,
  `user_type_name` varchar(50) DEFAULT NULL,
  `user_zip` varchar(12) DEFAULT NULL,
  `user_id` varchar(45) NOT NULL,
  `last_update_user_id` varchar(45) DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`address_id`),
  KEY `fk_user_id8_idx` (`user_id`),
  CONSTRAINT `fk_user_id7` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table store the address added by the user to make the order';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_address`
--

LOCK TABLES `user_address` WRITE;
/*!40000 ALTER TABLE `user_address` DISABLE KEYS */;
INSERT INTO `user_address` VALUES ('ADDR1','83 Morgan Street','Apt 10J','Stamford','US','','John','Doe','876655668','CT','Home address','06905','abc','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `user_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_favourites`
--

DROP TABLE IF EXISTS `user_favourites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_favourites` (
  `user_favourite_id` varchar(45) NOT NULL,
  `user_id` varchar(45) NOT NULL,
  `favourite_id` varchar(45) NOT NULL,
  `merchant_id` varchar(45) DEFAULT NULL,
  `order_fl` varchar(45) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`user_favourite_id`),
  KEY `fk_user_id8_idx` (`user_id`),
  KEY `fk_merchant_id9_idx` (`merchant_id`),
  CONSTRAINT `fk_merchant_id9` FOREIGN KEY (`merchant_id`) REFERENCES `merchant` (`merchant_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_id8` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table holds the user favourites information of agilekartv2 application.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_favourites`
--

LOCK TABLES `user_favourites` WRITE;
/*!40000 ALTER TABLE `user_favourites` DISABLE KEYS */;
INSERT INTO `user_favourites` VALUES ('USERFAV1','abc','ORDER1','MERCHANT1','Y','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `user_favourites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_rewards`
--

DROP TABLE IF EXISTS `user_rewards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_rewards` (
  `reward_id` varchar(45) NOT NULL,
  `user_id` varchar(45) NOT NULL,
  `order_id` varchar(45) NOT NULL,
  `points_earned` int(11) DEFAULT NULL,
  `points_redeemed` int(11) DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  `points_earned_date` date DEFAULT NULL,
  `points_redeeemed_date` date DEFAULT NULL,
  `tier_id` varchar(45) NOT NULL,
  `total_points_earned` int(11) DEFAULT NULL,
  `total_points_redeemed` int(11) DEFAULT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`reward_id`),
  KEY `fk_user_id6_idx` (`user_id`),
  KEY `fk_order_id6_idx` (`order_id`),
  KEY `fk_tier_id6_idx` (`tier_id`),
  CONSTRAINT `fk_order_id6` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tier_id6` FOREIGN KEY (`tier_id`) REFERENCES `loyalty_program_tier` (`tier_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_id6` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table holds the user rewards information of agilekartv2 application.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_rewards`
--

LOCK TABLES `user_rewards` WRITE;
/*!40000 ALTER TABLE `user_rewards` DISABLE KEYS */;
INSERT INTO `user_rewards` VALUES ('REWARD1','abc','ORDER1',375,0,'2015-12-31','2015-07-12',NULL,'TIER5',375,NULL,'abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `user_rewards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` varchar(45) NOT NULL DEFAULT '',
  `user_email` varchar(500) DEFAULT NULL,
  `user_password` varchar(500) DEFAULT NULL,
  `user_first_name` varchar(50) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `user_last_name` varchar(50) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `user_email_verified` tinyint(1) DEFAULT '0',
  `user_registration_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_verification_code` varchar(20) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `user_reward_points` int(11) DEFAULT NULL,
  `user_phone_no` varchar(20) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `last_update_user_id` varchar(45) CHARACTER SET latin1 COLLATE latin1_german2_ci DEFAULT NULL,
  `last_update_ts` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='This table holds the user information of agilekartv2 application.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('abc','admin@agilerulesconsultants.com','password1','John','Doe',0,'2015-01-01 00:00:00','g5Tih8',150,'897654357','abc','2015-07-12 18:30:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-09-05 20:08:44
