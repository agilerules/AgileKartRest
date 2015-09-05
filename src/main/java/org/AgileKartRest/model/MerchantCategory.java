package org.AgileKartRest.model;

// Generated 12 Aug, 2015 11:27:47 PM by Hibernate Tools 4.3.1

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * MerchantCategory generated by hbm2java
 */
@Entity
@Table(name = "merchant_category"
      , catalog = "agilekartv2")
@XmlRootElement
public class MerchantCategory implements java.io.Serializable
{
	private static final long serialVersionUID = 4817982786511262701L;
private String merchantCategoryId;
   private Category category;
   private Merchant merchant;
   private String lastUpdateUserId;
   private Date lastUpdateTs;

   public MerchantCategory()
   {
   }

   public MerchantCategory(String merchantCategoryId, Category category, Merchant merchant)
   {
      this.merchantCategoryId = merchantCategoryId;
      this.category = category;
      this.merchant = merchant;
   }

   public MerchantCategory(String merchantCategoryId, Category category, Merchant merchant, String lastUpdateUserId, Date lastUpdateTs)
   {
      this.merchantCategoryId = merchantCategoryId;
      this.category = category;
      this.merchant = merchant;
      this.lastUpdateUserId = lastUpdateUserId;
      this.lastUpdateTs = lastUpdateTs;
   }

   @Id
   @Column(name = "merchant_category_id", unique = true, nullable = false, length = 45)
   public String getMerchantCategoryId()
   {
      return this.merchantCategoryId;
   }

   public void setMerchantCategoryId(String merchantCategoryId)
   {
      this.merchantCategoryId = merchantCategoryId;
   }

   @ManyToOne(fetch = FetchType.EAGER)
   @JoinColumn(name = "category_id", nullable = false)
   public Category getCategory()
   {
      return this.category;
   }

   public void setCategory(Category category)
   {
      this.category = category;
   }

   @ManyToOne(fetch = FetchType.EAGER)
   @JoinColumn(name = "merchant_id", nullable = false)
   public Merchant getMerchant()
   {
      return this.merchant;
   }

   public void setMerchant(Merchant merchant)
   {
      this.merchant = merchant;
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
