package org.AgileKartRest.entity;

// Generated May 23, 2015 8:30:37 PM by Hibernate Tools 4.3.1

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

/**
 * AkOrderDetails generated by hbm2java
 */
@Entity
@Table(name = "ak_order_details"
      , catalog = "agilekart")
@XmlRootElement
public class AkOrderDetails implements java.io.Serializable
{

   /**
	 * 
	 */
	private static final long serialVersionUID = 3493779951874107817L;
private Integer detailId;
   private AkOrders akOrders;
   private AkProducts akProducts;
   private String detailName;
   private float detailPrice;
   private String detailSku;
   private int detailQuantity;

   public AkOrderDetails()
   {
   }

   public AkOrderDetails(AkOrders akOrders, AkProducts akProducts, String detailName, float detailPrice, String detailSku, int detailQuantity)
   {
      this.akOrders = akOrders;
      this.akProducts = akProducts;
      this.detailName = detailName;
      this.detailPrice = detailPrice;
      this.detailSku = detailSku;
      this.detailQuantity = detailQuantity;
   }

   @Id
   @GeneratedValue(strategy = IDENTITY)
   @Column(name = "detail_id", unique = true, nullable = false)
   public Integer getDetailId()
   {
      return this.detailId;
   }

   public void setDetailId(Integer detailId)
   {
      this.detailId = detailId;
   }

   @ManyToOne(fetch = FetchType.EAGER)
   @JoinColumn(name = "order_id", nullable = false)
   public AkOrders getAkOrders()
   {
      return this.akOrders;
   }

   public void setAkOrders(AkOrders akOrders)
   {
      this.akOrders = akOrders;
   }

   @ManyToOne(fetch = FetchType.EAGER)
   @JoinColumn(name = "product_id", nullable = false)
   public AkProducts getAkProducts()
   {
      return this.akProducts;
   }

   public void setAkProducts(AkProducts akProducts)
   {
      this.akProducts = akProducts;
   }

   @Column(name = "detail_name", nullable = false, length = 250)
   public String getDetailName()
   {
      return this.detailName;
   }

   public void setDetailName(String detailName)
   {
      this.detailName = detailName;
   }

   @Column(name = "detail_price", nullable = false, precision = 12, scale = 0)
   public float getDetailPrice()
   {
      return this.detailPrice;
   }

   public void setDetailPrice(float detailPrice)
   {
      this.detailPrice = detailPrice;
   }

   @Column(name = "detail_SKU", nullable = false, length = 50)
   public String getDetailSku()
   {
      return this.detailSku;
   }

   public void setDetailSku(String detailSku)
   {
      this.detailSku = detailSku;
   }

   @Column(name = "detail_quantity", nullable = false)
   public int getDetailQuantity()
   {
      return this.detailQuantity;
   }

   public void setDetailQuantity(int detailQuantity)
   {
      this.detailQuantity = detailQuantity;
   }

}
