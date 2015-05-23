CREATE DATABASE  IF NOT EXISTS `agilekart` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `agilekart`;
-- MySQL dump 10.13  Distrib 5.6.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: agilekart
-- ------------------------------------------------------
-- Server version	5.6.15-log

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
-- Table structure for table `ak_option_groups`
--

DROP TABLE IF EXISTS `ak_option_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ak_option_groups` (
  `option_group_id` int(11) NOT NULL AUTO_INCREMENT,
  `option_group_name` varchar(50) COLLATE latin1_german2_ci NOT NULL,
  `option_group_desc` varchar(45) COLLATE latin1_german2_ci NOT NULL,
  PRIMARY KEY (`option_group_id`),
  UNIQUE KEY `option_group_desc_UNIQUE` (`option_group_desc`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_german2_ci COMMENT='This table holds the product option groups (like Colours, Size etc) information of AgileKart application.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ak_option_groups`
--

LOCK TABLES `ak_option_groups` WRITE;
/*!40000 ALTER TABLE `ak_option_groups` DISABLE KEYS */;
INSERT INTO `ak_option_groups` VALUES (1,'Colours','Colours'),(2,'Size','Dress Size'),(3,'Gender','Gender'),(4,'Condition','Condition'),(5,'Size','Shoe Size');
/*!40000 ALTER TABLE `ak_option_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ak_options`
--

DROP TABLE IF EXISTS `ak_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ak_options` (
  `option_id` int(11) NOT NULL AUTO_INCREMENT,
  `option_group_id` int(11) NOT NULL,
  `option_name` varchar(50) COLLATE latin1_german2_ci NOT NULL,
  PRIMARY KEY (`option_id`),
  UNIQUE KEY `UK_OPTION_NM_GROUP_ID` (`option_name`,`option_group_id`),
  KEY `FR_OPTIONGROUP_idx` (`option_group_id`),
  CONSTRAINT `fk_option_group_id` FOREIGN KEY (`option_group_id`) REFERENCES `ak_option_groups` (`option_group_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1 COLLATE=latin1_german2_ci COMMENT='This table holds the product options (like various product colours, size etc) of AgileKart application.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ak_options`
--

LOCK TABLES `ak_options` WRITE;
/*!40000 ALTER TABLE `ak_options` DISABLE KEYS */;
INSERT INTO `ak_options` VALUES (2,1,'Black'),(1,1,'Blue'),(12,1,'Grey'),(6,2,'L'),(5,2,'M'),(7,3,'Men'),(9,4,'New'),(11,1,'Pink'),(4,2,'S'),(15,5,'Size 10'),(13,5,'Size 8'),(14,5,'Size 9'),(10,4,'Used'),(3,1,'White'),(8,3,'Women');
/*!40000 ALTER TABLE `ak_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ak_order_details`
--

DROP TABLE IF EXISTS `ak_order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ak_order_details` (
  `detail_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(12) NOT NULL,
  `detail_name` varchar(250) COLLATE latin1_german2_ci NOT NULL,
  `detail_price` float NOT NULL,
  `detail_SKU` varchar(50) COLLATE latin1_german2_ci NOT NULL,
  `detail_quantity` int(11) NOT NULL,
  PRIMARY KEY (`detail_id`),
  KEY `fk_order_id_idx_idx` (`order_id`),
  KEY `fk_product_id_idx` (`product_id`),
  CONSTRAINT `fk_order_id` FOREIGN KEY (`order_id`) REFERENCES `ak_orders` (`order_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_id` FOREIGN KEY (`product_id`) REFERENCES `ak_products` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_german2_ci COMMENT='This table holds the order detail information AgileKart application.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ak_order_details`
--

LOCK TABLES `ak_order_details` WRITE;
/*!40000 ALTER TABLE `ak_order_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `ak_order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ak_orders`
--

DROP TABLE IF EXISTS `ak_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ak_orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `order_amount` float NOT NULL,
  `order_ship_name` varchar(100) COLLATE latin1_german2_ci NOT NULL,
  `order_ship_address` varchar(100) COLLATE latin1_german2_ci NOT NULL,
  `order_ship_address2` varchar(100) COLLATE latin1_german2_ci NOT NULL,
  `order_city` varchar(50) COLLATE latin1_german2_ci NOT NULL,
  `order_state` varchar(50) COLLATE latin1_german2_ci NOT NULL,
  `order_zip` varchar(20) COLLATE latin1_german2_ci NOT NULL,
  `order_country` varchar(50) COLLATE latin1_german2_ci NOT NULL,
  `order_phone` varchar(20) COLLATE latin1_german2_ci NOT NULL,
  `order_fax` varchar(20) COLLATE latin1_german2_ci NOT NULL,
  `order_shipping` float NOT NULL,
  `order_tax` float NOT NULL,
  `order_email` varchar(100) COLLATE latin1_german2_ci NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `order_shipped` tinyint(1) NOT NULL DEFAULT '0',
  `order_tracking_no` varchar(80) COLLATE latin1_german2_ci DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `fk_user_id_idx` (`user_id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `ak_users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_german2_ci COMMENT='This table holds the order information AgileKart application.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ak_orders`
--

LOCK TABLES `ak_orders` WRITE;
/*!40000 ALTER TABLE `ak_orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `ak_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ak_product_categories`
--

DROP TABLE IF EXISTS `ak_product_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ak_product_categories` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(50) COLLATE latin1_german2_ci NOT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `category_name_UNIQUE` (`category_name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_german2_ci COMMENT='This table holds the product categories of AgileKart application.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ak_product_categories`
--

LOCK TABLES `ak_product_categories` WRITE;
/*!40000 ALTER TABLE `ak_product_categories` DISABLE KEYS */;
INSERT INTO `ak_product_categories` VALUES (3,'Shoes'),(1,'T-Shirts'),(2,'Watches');
/*!40000 ALTER TABLE `ak_product_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ak_product_options`
--

DROP TABLE IF EXISTS `ak_product_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ak_product_options` (
  `product_option_id` int(10) NOT NULL AUTO_INCREMENT,
  `product_id` int(12) NOT NULL,
  `option_id` int(11) NOT NULL,
  `option_price_increment` double DEFAULT NULL,
  `option_group_id` int(11) NOT NULL,
  PRIMARY KEY (`product_option_id`),
  KEY `fk_option_grp_id_idx` (`option_group_id`),
  KEY `fk_option_id_idx` (`option_id`),
  KEY `fk_pdct_id_idx` (`product_id`),
  CONSTRAINT `fk_option_grp_id` FOREIGN KEY (`option_group_id`) REFERENCES `ak_option_groups` (`option_group_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_option_id` FOREIGN KEY (`option_id`) REFERENCES `ak_options` (`option_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_pdct_id` FOREIGN KEY (`product_id`) REFERENCES `ak_products` (`product_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=latin1 COLLATE=latin1_german2_ci COMMENT='This table holds the mapping information between Product and Option tables of AgileKart application.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ak_product_options`
--

LOCK TABLES `ak_product_options` WRITE;
/*!40000 ALTER TABLE `ak_product_options` DISABLE KEYS */;
INSERT INTO `ak_product_options` VALUES (1,1,2,10,1),(2,1,4,0,2),(3,1,5,5,2),(4,1,6,10,2),(5,1,7,0,3),(6,2,11,0,1),(7,2,5,5,2),(8,2,6,10,2),(9,2,8,0,3),(10,3,1,0,1),(11,3,5,0,2),(12,3,7,0,3),(13,4,7,0,3),(14,4,9,10,4),(15,5,8,0,3),(16,5,9,5,4),(17,6,8,10,3),(18,6,10,0,4),(19,7,3,0,1),(20,7,5,0,2),(21,7,6,5,2),(22,7,8,0,3),(23,8,12,0,1),(24,8,4,0,2),(25,8,5,5,2),(26,8,6,10,2),(27,8,7,0,3),(28,9,7,0,3),(29,9,9,0,4),(30,10,8,0,3),(31,10,9,10,4),(32,11,7,0,3),(33,11,13,5,5),(34,11,14,10,5),(35,12,7,5,3),(36,12,13,0,5),(37,12,14,5,5),(38,12,15,10,5),(39,13,8,0,3),(40,13,13,0,5),(41,13,14,5,5),(42,14,8,0,3),(43,14,13,0,5),(44,14,14,3,5),(45,14,15,6,5),(46,15,8,0,3),(47,15,13,5,5),(48,15,14,10,5);
/*!40000 ALTER TABLE `ak_product_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ak_products`
--

DROP TABLE IF EXISTS `ak_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ak_products` (
  `product_id` int(12) NOT NULL AUTO_INCREMENT,
  `product_SKU` varchar(50) COLLATE latin1_german2_ci NOT NULL,
  `product_name` varchar(100) COLLATE latin1_german2_ci NOT NULL,
  `product_price` float NOT NULL,
  `product_weight` float NOT NULL,
  `product_cart_desc` varchar(250) COLLATE latin1_german2_ci NOT NULL,
  `product_short_desc` varchar(1000) COLLATE latin1_german2_ci NOT NULL,
  `product_long_desc` varchar(4000) COLLATE latin1_german2_ci NOT NULL,
  `product_thumb` varchar(100) COLLATE latin1_german2_ci NOT NULL,
  `product_image` varchar(100) COLLATE latin1_german2_ci NOT NULL,
  `product_category_id` int(11) NOT NULL,
  `product_update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `product_stock` float DEFAULT NULL,
  `product_online_only` tinyint(1) DEFAULT NULL,
  `product_unlimited` tinyint(1) DEFAULT NULL,
  `product_location` varchar(250) COLLATE latin1_german2_ci DEFAULT NULL,
  `product_discount_percentage` float DEFAULT NULL,
  `product_hit_count` int(12) DEFAULT '0',
  `product_sold_count` int(12) DEFAULT '0',
  PRIMARY KEY (`product_id`),
  KEY `FR_CATEGORYKEY_idx` (`product_category_id`),
  CONSTRAINT `fk_category_id` FOREIGN KEY (`product_category_id`) REFERENCES `ak_product_categories` (`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1 COLLATE=latin1_german2_ci COMMENT='This table holds the product information of AgileKart application.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ak_products`
--

LOCK TABLES `ak_products` WRITE;
/*!40000 ALTER TABLE `ak_products` DISABLE KEYS */;
INSERT INTO `ak_products` VALUES (1,'000-0001','T-Shirt',9.99,1,'Light Cotton T-Shirt','A light cotton T-Shirt made with 100% real cotton.','A light cotton T-Shirt made with 100% real cotton.Made right here in the USA for over 15 years, this t-shirt is lightweight and durable.','img\\1-home_default\\Light_Cotton_TShirt.jpg','img\\1-home_default\\Light_Cotton_TShirt.jpg',1,'2015-04-22 13:34:12',100,0,0,'US',2,10,5),(2,'000-0002','Spring Tee',12.99,1,'APK spring Tee','A flowy  tee perfect for spring.','A flowy, breezy tee made in USA. This tee comes in the colour of the seasons.','img\\1-home_default\\APK_Spring Tee.jpg','img\\1-home_default\\APK_Spring Tee.jpg',1,'2015-04-22 13:34:12',299,0,0,'US',0,50,3),(3,'000-0003','Polo',14.99,1,'Jakes polo','The perfect polo T-shirt for men.','A light, durable polo T-shirt . Made in US by the leading garment manufacturer.','img\\1-home_default\\Jakes_polo.jpg','img\\1-home_default\\Jakes_polo.jpg',1,'2015-04-22 13:34:12',399,1,0,'US',0,100,2),(4,'000-0004','Luxury Men',45.89,0.5,'Watchworld Men\'s Classic','Men\'s classic formal watch.','The go-to watch for all formal occasions.Made in China for the last 50 years.','img\\2-home_default\\Watchworld_Mens_Classic.jpg','img\\2-home_default\\Watchworld_Mens_Classic.jpg',2,'2015-04-22 13:34:12',1099,0,0,'China',7,88,1),(5,'000-0005','Luxury Women',54.99,0.5,'Watchworld women\'s Classic','Women\'s classic formal watch.','A classic watch to suit all the formal occasions. Made here in US','img\\2-home_default\\Watchworld_womens_Classic.jpg','img\\2-home_default\\Watchworld_womens_Classic.jpg',2,'2015-04-22 13:34:12',4999,0,0,'US',10,176,2),(6,'000-0006','Sports Women',35.99,0.5,'Women\'s Kalitron sport','Trendy women\'s sports watch','Trendy, light weight sports watch . Imported from India.','img\\2-home_default\\Womens_Kalitron_sport.jpg','img\\2-home_default\\Womens_Kalitron_sport.jpg',2,'2015-04-22 13:34:12',435,1,0,'India',5,598,5),(7,'000-0007','Trendy Spring Tee',12.99,1,'Daisy spring Tee','A flowy  tee perfect for spring.','A flowy, breezy tee made in USA. This tee comes in the colour of the seasons.','img\\1-home_default\\APK_Spring Tee_2.jpg','img\\1-home_default\\APK_Spring Tee_2.jpg',1,'2015-04-22 13:34:12',299,0,0,'US',0,50,3),(8,'000-0008','T-Shirt',10.99,1,'Cotton T-Shirt','A light cotton T-Shirt made with 100% real cotton.','A light cotton T-Shirt made with 100% real cotton.Made right here in the USA for over 15 years, this t-shirt is lightweight and durable.','img\\1-home_default\\Light_Cotton_TShirt_3.jpg','img\\1-home_default\\Light_Cotton_TShirt_3.jpg',1,'2015-04-22 13:34:12',100,0,0,'US',2,10,5),(9,'000-0009','Classic Luxury Men',55.89,0.5,'Men\'s Classic','Men\'s classic formal watch.','The go-to watch for all formal occasions.Made in China for the last 50 years.','img\\2-home_default\\Watchworld_Mens_Classic_3.jpg','img\\2-home_default\\Watchworld_Mens_Classic_3.jpg',2,'2015-04-22 13:34:12',900,0,0,'China',10,45,5),(10,'000-0010','Classic Luxury Women',74.99,0.5,'Women\'s Classic','Women\'s classic formal watch.','A classic watch to suit all the formal occasions. Made here in US','img\\2-home_default\\Watchworld_womens_Classic_2.jpg','img\\2-home_default\\Watchworld_womens_Classic_2.jpg',2,'2015-04-22 13:34:12',566,0,0,'US',5,145,5),(11,'000-0011','Carbok Shoes',29.99,1.5,'Trendy Mens shoes','A light ,sturdy men\'s shoes for everyday comfort.','A light ,sturdy men\'s shoes for everyday action.Made right here in the USA for over 15 years, this shoe is lightweight and durable.','img\\3-home_default\\Men_Shoes_1.jpg','img\\3-home_default\\Men_Shoes_1.jpg',3,'2015-05-15 13:34:12',100,0,0,'US',5,1000,50),(12,'000-0012','High fly shoes',49.99,1.5,'Casual athletic shoes','Casual athletic shoes for everyday use at the gym.','Casual athletic shoes for everyday use at the gym..Made in the China by a leading company for 25 years.','img\\3-home_default\\Men_Shoes_2.jpg','img\\3-home_default\\Men_Shoes_2.jpg',3,'2015-05-15 13:34:12',45,0,0,'US',10,145,112),(13,'000-0013','Go-Run Shoes',34.99,1.5,'Causal running shoes','Causal running shoes especially for women.','Causal running shoes especially designed for women.Manufactured by a leading orthopaedic research center in US','img\\3-home_default\\Women_Shoes_1.jpg','img\\3-home_default\\Women_Shoes_1.jpg',3,'2015-05-15 13:34:12',125,0,0,'US',15,45,15),(14,'000-0014','Sake Shoes',49.99,1.5,'Trendy athletic shoes','Trendy athletic shoes made for women','Trendy athletic shoes made for women.Made right here in the USA for over 45 years.','img\\3-home_default\\Women_Shoes_2.jpg','img\\3-home_default\\Women_Shoes_2.jpg',3,'2015-05-15 13:34:12',14,0,0,'US',0,34,4),(15,'000-0015','Airmax Hyperfly shoes',129.99,1.5,'High performance women\'s shoes','Light weight, durable shoes for high performance runners.','Light weight, durable shoes for high performance runners.Made in China','img\\3-home_default\\Women_Shoes_3.jpg','img\\3-home_default\\Women_Shoes_3.jpg',3,'2015-05-15 13:34:12',200,0,0,'China',20,56,10);
/*!40000 ALTER TABLE `ak_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ak_users`
--

DROP TABLE IF EXISTS `ak_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ak_users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_email` varchar(500) COLLATE latin1_german2_ci DEFAULT NULL,
  `user_password` varchar(500) COLLATE latin1_german2_ci DEFAULT NULL,
  `user_first_name` varchar(50) COLLATE latin1_german2_ci DEFAULT NULL,
  `user_last_name` varchar(50) COLLATE latin1_german2_ci DEFAULT NULL,
  `user_city` varchar(90) COLLATE latin1_german2_ci DEFAULT NULL,
  `user_state` varchar(20) COLLATE latin1_german2_ci DEFAULT NULL,
  `user_zip` varchar(12) COLLATE latin1_german2_ci DEFAULT NULL,
  `user_email_verified` tinyint(1) DEFAULT '0',
  `user_registration_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_verification_code` varchar(20) COLLATE latin1_german2_ci DEFAULT NULL,
  `user_ip` varchar(50) COLLATE latin1_german2_ci DEFAULT NULL,
  `user_phone` varchar(20) COLLATE latin1_german2_ci DEFAULT NULL,
  `user_fax` varchar(20) COLLATE latin1_german2_ci DEFAULT NULL,
  `user_country` varchar(20) COLLATE latin1_german2_ci DEFAULT NULL,
  `user_address` varchar(100) COLLATE latin1_german2_ci DEFAULT NULL,
  `user_address2` varchar(50) COLLATE latin1_german2_ci DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_german2_ci COMMENT='This table holds the user information of AgileKart application.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ak_users`
--

LOCK TABLES `ak_users` WRITE;
/*!40000 ALTER TABLE `ak_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `ak_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-05-17 23:27:03
