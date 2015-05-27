package org.AgileKartRest.model;

// Generated May 23, 2015 8:30:37 PM by Hibernate Tools 4.3.1

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

/**
 * AkProducts generated by hbm2java
 */
@Entity
@Table(name = "ak_products"
      , catalog = "agilekart")
@JsonIgnoreProperties({ "akOrderDetailses","akProductOptionses"})
@XmlRootElement
public class AkProducts implements java.io.Serializable
{

   private Integer productId;
   private AkProductCategories akProductCategories;
   private String productSku;
   private String productName;
   private float productPrice;
   private float productWeight;
   private String productCartDesc;
   private String productShortDesc;
   private String productLongDesc;
   private String productThumb;
   private String productImage;
   private Date productUpdateDate;
   private Float productStock;
   private Boolean productOnlineOnly;
   private Boolean productUnlimited;
   private String productLocation;
   private Float productDiscountPercentage;
   private Integer productHitCount;
   private Integer productSoldCount;
   private Set<AkOrderDetails> akOrderDetailses = new HashSet<AkOrderDetails>(0);
   private Set<AkProductOptions> akProductOptionses = new HashSet<AkProductOptions>(0);

   public AkProducts()
   {
   }

   public AkProducts(AkProductCategories akProductCategories, String productSku, String productName, float productPrice, float productWeight, String productCartDesc, String productShortDesc, String productLongDesc, String productThumb, String productImage, Date productUpdateDate)
   {
      this.akProductCategories = akProductCategories;
      this.productSku = productSku;
      this.productName = productName;
      this.productPrice = productPrice;
      this.productWeight = productWeight;
      this.productCartDesc = productCartDesc;
      this.productShortDesc = productShortDesc;
      this.productLongDesc = productLongDesc;
      this.productThumb = productThumb;
      this.productImage = productImage;
      this.productUpdateDate = productUpdateDate;
   }

   public AkProducts(AkProductCategories akProductCategories, String productSku, String productName, float productPrice, float productWeight, String productCartDesc, String productShortDesc, String productLongDesc, String productThumb, String productImage, Date productUpdateDate, Float productStock, Boolean productOnlineOnly, Boolean productUnlimited, String productLocation, Float productDiscountPercentage, Integer productHitCount, Integer productSoldCount, Set<AkOrderDetails> akOrderDetailses, Set<AkProductOptions> akProductOptionses)
   {
      this.akProductCategories = akProductCategories;
      this.productSku = productSku;
      this.productName = productName;
      this.productPrice = productPrice;
      this.productWeight = productWeight;
      this.productCartDesc = productCartDesc;
      this.productShortDesc = productShortDesc;
      this.productLongDesc = productLongDesc;
      this.productThumb = productThumb;
      this.productImage = productImage;
      this.productUpdateDate = productUpdateDate;
      this.productStock = productStock;
      this.productOnlineOnly = productOnlineOnly;
      this.productUnlimited = productUnlimited;
      this.productLocation = productLocation;
      this.productDiscountPercentage = productDiscountPercentage;
      this.productHitCount = productHitCount;
      this.productSoldCount = productSoldCount;
      this.akOrderDetailses = akOrderDetailses;
      this.akProductOptionses = akProductOptionses;
   }

   @Id
   @GeneratedValue(strategy = IDENTITY)
   @Column(name = "product_id", unique = true, nullable = false)
   public Integer getProductId()
   {
      return this.productId;
   }

   public void setProductId(Integer productId)
   {
      this.productId = productId;
   }

   @ManyToOne(fetch = FetchType.EAGER)
   @JoinColumn(name = "product_category_id", nullable = false)
   public AkProductCategories getAkProductCategories()
   {
      return this.akProductCategories;
   }

   public void setAkProductCategories(AkProductCategories akProductCategories)
   {
      this.akProductCategories = akProductCategories;
   }

   @Column(name = "product_SKU", nullable = false, length = 50)
   public String getProductSku()
   {
      return this.productSku;
   }

   public void setProductSku(String productSku)
   {
      this.productSku = productSku;
   }

   @Column(name = "product_name", nullable = false, length = 100)
   public String getProductName()
   {
      return this.productName;
   }

   public void setProductName(String productName)
   {
      this.productName = productName;
   }

   @Column(name = "product_price", nullable = false, precision = 12, scale = 0)
   public float getProductPrice()
   {
      return this.productPrice;
   }

   public void setProductPrice(float productPrice)
   {
      this.productPrice = productPrice;
   }

   @Column(name = "product_weight", nullable = false, precision = 12, scale = 0)
   public float getProductWeight()
   {
      return this.productWeight;
   }

   public void setProductWeight(float productWeight)
   {
      this.productWeight = productWeight;
   }

   @Column(name = "product_cart_desc", nullable = false, length = 250)
   public String getProductCartDesc()
   {
      return this.productCartDesc;
   }

   public void setProductCartDesc(String productCartDesc)
   {
      this.productCartDesc = productCartDesc;
   }

   @Column(name = "product_short_desc", nullable = false, length = 1000)
   public String getProductShortDesc()
   {
      return this.productShortDesc;
   }

   public void setProductShortDesc(String productShortDesc)
   {
      this.productShortDesc = productShortDesc;
   }

   @Column(name = "product_long_desc", nullable = false, length = 4000)
   public String getProductLongDesc()
   {
      return this.productLongDesc;
   }

   public void setProductLongDesc(String productLongDesc)
   {
      this.productLongDesc = productLongDesc;
   }

   @Column(name = "product_thumb", nullable = false, length = 100)
   public String getProductThumb()
   {
      return this.productThumb;
   }

   public void setProductThumb(String productThumb)
   {
      this.productThumb = productThumb;
   }

   @Column(name = "product_image", nullable = false, length = 100)
   public String getProductImage()
   {
      return this.productImage;
   }

   public void setProductImage(String productImage)
   {
      this.productImage = productImage;
   }

   @Temporal(TemporalType.TIMESTAMP)
   @Column(name = "product_update_date", nullable = false, length = 19)
   public Date getProductUpdateDate()
   {
      return this.productUpdateDate;
   }

   public void setProductUpdateDate(Date productUpdateDate)
   {
      this.productUpdateDate = productUpdateDate;
   }

   @Column(name = "product_stock", precision = 12, scale = 0)
   public Float getProductStock()
   {
      return this.productStock;
   }

   public void setProductStock(Float productStock)
   {
      this.productStock = productStock;
   }

   @Column(name = "product_online_only", columnDefinition = "BIT")
   public Boolean getProductOnlineOnly()
   {
      return this.productOnlineOnly;
   }

   public void setProductOnlineOnly(Boolean productOnlineOnly)
   {
      this.productOnlineOnly = productOnlineOnly;
   }

   @Column(name = "product_unlimited", columnDefinition = "BIT")
   public Boolean getProductUnlimited()
   {
      return this.productUnlimited;
   }

   public void setProductUnlimited(Boolean productUnlimited)
   {
      this.productUnlimited = productUnlimited;
   }

   @Column(name = "product_location", length = 250)
   public String getProductLocation()
   {
      return this.productLocation;
   }

   public void setProductLocation(String productLocation)
   {
      this.productLocation = productLocation;
   }

   @Column(name = "product_discount_percentage", precision = 12, scale = 0)
   public Float getProductDiscountPercentage()
   {
      return this.productDiscountPercentage;
   }

   public void setProductDiscountPercentage(Float productDiscountPercentage)
   {
      this.productDiscountPercentage = productDiscountPercentage;
   }

   @Column(name = "product_hit_count")
   public Integer getProductHitCount()
   {
      return this.productHitCount;
   }

   public void setProductHitCount(Integer productHitCount)
   {
      this.productHitCount = productHitCount;
   }

   @Column(name = "product_sold_count")
   public Integer getProductSoldCount()
   {
      return this.productSoldCount;
   }

   public void setProductSoldCount(Integer productSoldCount)
   {
      this.productSoldCount = productSoldCount;
   }

   @OneToMany(fetch = FetchType.EAGER, mappedBy = "akProducts")
   public Set<AkOrderDetails> getAkOrderDetailses()
   {
      return this.akOrderDetailses;
   }

   public void setAkOrderDetailses(Set<AkOrderDetails> akOrderDetailses)
   {
      this.akOrderDetailses = akOrderDetailses;
   }

   @OneToMany(fetch = FetchType.EAGER, mappedBy = "akProducts")
   public Set<AkProductOptions> getAkProductOptionses()
   {
      return this.akProductOptionses;
   }

   public void setAkProductOptionses(Set<AkProductOptions> akProductOptionses)
   {
      this.akProductOptionses = akProductOptionses;
   }

}
