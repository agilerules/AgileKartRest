package org.agilekartV2.model;

// Generated Jul 16, 2015 1:41:40 PM by Hibernate Tools 4.3.1

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Offer generated by hbm2java
 */
@Entity
@Table(name = "offer"
      , catalog = "agilekartV2")
@XmlRootElement
public class Offer implements java.io.Serializable
{

   private String offerId;
   private String offerName;
   private Integer offerDiscountPct;
   private Date offerStartDate;
   private Date offerEndDate;
   private String merchantId;
   private String productId;
   private Integer offerMaxCount;
   private String lastUpdateUserId;
   private Date lastUpdateTs;

   public Offer()
   {
   }

   public Offer(String offerId, String offerName)
   {
      this.offerId = offerId;
      this.offerName = offerName;
   }

   public Offer(String offerId, String offerName, Integer offerDiscountPct, Date offerStartDate, Date offerEndDate, String merchantId, String productId, Integer offerMaxCount, String lastUpdateUserId, Date lastUpdateTs)
   {
      this.offerId = offerId;
      this.offerName = offerName;
      this.offerDiscountPct = offerDiscountPct;
      this.offerStartDate = offerStartDate;
      this.offerEndDate = offerEndDate;
      this.merchantId = merchantId;
      this.productId = productId;
      this.offerMaxCount = offerMaxCount;
      this.lastUpdateUserId = lastUpdateUserId;
      this.lastUpdateTs = lastUpdateTs;
   }

   @Id
   @Column(name = "offer_id", unique = true, nullable = false, length = 45)
   public String getOfferId()
   {
      return this.offerId;
   }

   public void setOfferId(String offerId)
   {
      this.offerId = offerId;
   }

   @Column(name = "offer_name", nullable = false, length = 45)
   public String getOfferName()
   {
      return this.offerName;
   }

   public void setOfferName(String offerName)
   {
      this.offerName = offerName;
   }

   @Column(name = "offer_discount_pct")
   public Integer getOfferDiscountPct()
   {
      return this.offerDiscountPct;
   }

   public void setOfferDiscountPct(Integer offerDiscountPct)
   {
      this.offerDiscountPct = offerDiscountPct;
   }

   @Temporal(TemporalType.DATE)
   @Column(name = "offer_start_date", length = 10)
   public Date getOfferStartDate()
   {
      return this.offerStartDate;
   }

   public void setOfferStartDate(Date offerStartDate)
   {
      this.offerStartDate = offerStartDate;
   }

   @Temporal(TemporalType.DATE)
   @Column(name = "offer_end_date", length = 10)
   public Date getOfferEndDate()
   {
      return this.offerEndDate;
   }

   public void setOfferEndDate(Date offerEndDate)
   {
      this.offerEndDate = offerEndDate;
   }

   @Column(name = "merchant_id", length = 45)
   public String getMerchantId()
   {
      return this.merchantId;
   }

   public void setMerchantId(String merchantId)
   {
      this.merchantId = merchantId;
   }

   @Column(name = "product_id", length = 45)
   public String getProductId()
   {
      return this.productId;
   }

   public void setProductId(String productId)
   {
      this.productId = productId;
   }

   @Column(name = "offer_max_count")
   public Integer getOfferMaxCount()
   {
      return this.offerMaxCount;
   }

   public void setOfferMaxCount(Integer offerMaxCount)
   {
      this.offerMaxCount = offerMaxCount;
   }

   @Column(name = "last_update_user_id", length = 45)
   public String getLastUpdateUserId()
   {
      return this.lastUpdateUserId;
   }

   public void setLastUpdateUserId(String lastUpdateUserId)
   {
      this.lastUpdateUserId = lastUpdateUserId;
   }

   @Temporal(TemporalType.TIMESTAMP)
   @Column(name = "last_update_ts", length = 19)
   public Date getLastUpdateTs()
   {
      return this.lastUpdateTs;
   }

   public void setLastUpdateTs(Date lastUpdateTs)
   {
      this.lastUpdateTs = lastUpdateTs;
   }

}
