package org.AgileKartRest.entity;

// Generated 6 Jun, 2015 10:46:57 AM by Hibernate Tools 4.3.1

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.CascadeType;
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
 * AkOrders generated by hbm2java
 */
@Entity
@Table(name = "ak_orders"
      , catalog = "agilekart")
@JsonIgnoreProperties({ "akOrderDetailses"})
@XmlRootElement
public class AkOrders implements java.io.Serializable
{

   private Integer orderId;
   private AkUsers akUsers;
   private float orderAmount;
   private String orderShipName;
   private String orderShipAddress;
   private String orderShipAddress2;
   private String orderCity;
   private String orderState;
   private String orderZip;
   private String orderCountry;
   private String orderPhone;
   private String orderFax;
   private float orderShipping;
   private float orderTax;
   private String orderBillName;
   private String orderBillAddress;
   private String orderBillAddress2;
   private String orderBillCity;
   private String orderBillState;
   private String orderBillZip;
   private String orderBillCountry;
   private String orderBillPhone;
   private String orderBillFax;
   private String orderPaymentMode;
   private String orderPaymentDesc;
   private String orderEmail;
   private Date orderDate;
   private boolean orderShipped;
   private String orderTrackingNo;
   private String orderStatus;
   private Set<AkOrderDetails> akOrderDetailses = new HashSet<AkOrderDetails>(0);

   public AkOrders()
   {
   }

   public AkOrders(AkUsers akUsers, float orderAmount, String orderShipName, String orderShipAddress, String orderShipAddress2, String orderCity, String orderState, String orderZip, String orderCountry, String orderPhone, String orderFax, float orderShipping, float orderTax, String orderBillName, String orderBillAddress, String orderBillAddress2, String orderBillCity, String orderBillState, String orderBillZip, String orderBillCountry, String orderBillPhone, String orderBillFax, float orderBillTax, String orderPaymentMode, String orderEmail, Date orderDate, boolean orderShipped)
   {
      this.akUsers = akUsers;
      this.orderAmount = orderAmount;
      this.orderShipName = orderShipName;
      this.orderShipAddress = orderShipAddress;
      this.orderShipAddress2 = orderShipAddress2;
      this.orderCity = orderCity;
      this.orderState = orderState;
      this.orderZip = orderZip;
      this.orderCountry = orderCountry;
      this.orderPhone = orderPhone;
      this.orderFax = orderFax;
      this.orderShipping = orderShipping;
      this.orderTax = orderTax;
      this.orderBillName = orderBillName;
      this.orderBillAddress = orderBillAddress;
      this.orderBillAddress2 = orderBillAddress2;
      this.orderBillCity = orderBillCity;
      this.orderBillState = orderBillState;
      this.orderBillZip = orderBillZip;
      this.orderBillCountry = orderBillCountry;
      this.orderBillPhone = orderBillPhone;
      this.orderBillFax = orderBillFax;
      this.orderPaymentMode = orderPaymentMode;
      this.orderEmail = orderEmail;
      this.orderDate = orderDate;
      this.orderShipped = orderShipped;
   }

   public AkOrders(AkUsers akUsers, float orderAmount, String orderShipName, String orderShipAddress, String orderShipAddress2, String orderCity, String orderState, String orderZip, String orderCountry, String orderPhone, String orderFax, float orderShipping, float orderTax, String orderBillName, String orderBillAddress, String orderBillAddress2, String orderBillCity, String orderBillState, String orderBillZip, String orderBillCountry, String orderBillPhone, String orderBillFax, float orderBillTax, String orderPaymentMode, String orderPaymentDesc, String orderEmail, Date orderDate, boolean orderShipped, String orderTrackingNo, String orderStatus, Set<AkOrderDetails> akOrderDetailses)
   {
      this.akUsers = akUsers;
      this.orderAmount = orderAmount;
      this.orderShipName = orderShipName;
      this.orderShipAddress = orderShipAddress;
      this.orderShipAddress2 = orderShipAddress2;
      this.orderCity = orderCity;
      this.orderState = orderState;
      this.orderZip = orderZip;
      this.orderCountry = orderCountry;
      this.orderPhone = orderPhone;
      this.orderFax = orderFax;
      this.orderShipping = orderShipping;
      this.orderTax = orderTax;
      this.orderBillName = orderBillName;
      this.orderBillAddress = orderBillAddress;
      this.orderBillAddress2 = orderBillAddress2;
      this.orderBillCity = orderBillCity;
      this.orderBillState = orderBillState;
      this.orderBillZip = orderBillZip;
      this.orderBillCountry = orderBillCountry;
      this.orderBillPhone = orderBillPhone;
      this.orderBillFax = orderBillFax;
      this.orderPaymentMode = orderPaymentMode;
      this.orderPaymentDesc = orderPaymentDesc;
      this.orderEmail = orderEmail;
      this.orderDate = orderDate;
      this.orderShipped = orderShipped;
      this.orderTrackingNo = orderTrackingNo;
      this.orderStatus = orderStatus;
      this.akOrderDetailses = akOrderDetailses;
   }

   @Id
   @GeneratedValue(strategy = IDENTITY)
   @Column(name = "order_id", unique = true, nullable = false)
   public Integer getOrderId()
   {
      return this.orderId;
   }

   public void setOrderId(Integer orderId)
   {
      this.orderId = orderId;
   }

   @ManyToOne(fetch = FetchType.EAGER)
   @JoinColumn(name = "user_id", nullable = false)
   public AkUsers getAkUsers()
   {
      return this.akUsers;
   }

   public void setAkUsers(AkUsers akUsers)
   {
      this.akUsers = akUsers;
   }

   @Column(name = "order_amount", nullable = false, precision = 12, scale = 0)
   public float getOrderAmount()
   {
      return this.orderAmount;
   }

   public void setOrderAmount(float orderAmount)
   {
      this.orderAmount = orderAmount;
   }

   @Column(name = "order_ship_name", nullable = false, length = 100)
   public String getOrderShipName()
   {
      return this.orderShipName;
   }

   public void setOrderShipName(String orderShipName)
   {
      this.orderShipName = orderShipName;
   }

   @Column(name = "order_ship_address", nullable = false, length = 100)
   public String getOrderShipAddress()
   {
      return this.orderShipAddress;
   }

   public void setOrderShipAddress(String orderShipAddress)
   {
      this.orderShipAddress = orderShipAddress;
   }

   @Column(name = "order_ship_address2", nullable = false, length = 100)
   public String getOrderShipAddress2()
   {
      return this.orderShipAddress2;
   }

   public void setOrderShipAddress2(String orderShipAddress2)
   {
      this.orderShipAddress2 = orderShipAddress2;
   }

   @Column(name = "order_city", nullable = false, length = 50)
   public String getOrderCity()
   {
      return this.orderCity;
   }

   public void setOrderCity(String orderCity)
   {
      this.orderCity = orderCity;
   }

   @Column(name = "order_state", nullable = false, length = 50)
   public String getOrderState()
   {
      return this.orderState;
   }

   public void setOrderState(String orderState)
   {
      this.orderState = orderState;
   }

   @Column(name = "order_zip", nullable = false, length = 20)
   public String getOrderZip()
   {
      return this.orderZip;
   }

   public void setOrderZip(String orderZip)
   {
      this.orderZip = orderZip;
   }

   @Column(name = "order_country", nullable = false, length = 50)
   public String getOrderCountry()
   {
      return this.orderCountry;
   }

   public void setOrderCountry(String orderCountry)
   {
      this.orderCountry = orderCountry;
   }

   @Column(name = "order_phone", nullable = false, length = 20)
   public String getOrderPhone()
   {
      return this.orderPhone;
   }

   public void setOrderPhone(String orderPhone)
   {
      this.orderPhone = orderPhone;
   }

   @Column(name = "order_fax", nullable = false, length = 20)
   public String getOrderFax()
   {
      return this.orderFax;
   }

   public void setOrderFax(String orderFax)
   {
      this.orderFax = orderFax;
   }

   @Column(name = "order_shipping", nullable = false, precision = 12, scale = 0)
   public float getOrderShipping()
   {
      return this.orderShipping;
   }

   public void setOrderShipping(float orderShipping)
   {
      this.orderShipping = orderShipping;
   }

   @Column(name = "order_tax", nullable = false, precision = 12, scale = 0)
   public float getOrderTax()
   {
      return this.orderTax;
   }

   public void setOrderTax(float orderTax)
   {
      this.orderTax = orderTax;
   }

   @Column(name = "order_bill_name", nullable = false, length = 100)
   public String getOrderBillName()
   {
      return this.orderBillName;
   }

   public void setOrderBillName(String orderBillName)
   {
      this.orderBillName = orderBillName;
   }

   @Column(name = "order_bill_address", nullable = false, length = 100)
   public String getOrderBillAddress()
   {
      return this.orderBillAddress;
   }

   public void setOrderBillAddress(String orderBillAddress)
   {
      this.orderBillAddress = orderBillAddress;
   }

   @Column(name = "order_bill_address2", nullable = false, length = 100)
   public String getOrderBillAddress2()
   {
      return this.orderBillAddress2;
   }

   public void setOrderBillAddress2(String orderBillAddress2)
   {
      this.orderBillAddress2 = orderBillAddress2;
   }

   @Column(name = "order_bill_city", nullable = false, length = 50)
   public String getOrderBillCity()
   {
      return this.orderBillCity;
   }

   public void setOrderBillCity(String orderBillCity)
   {
      this.orderBillCity = orderBillCity;
   }

   @Column(name = "order_bill_state", nullable = false, length = 50)
   public String getOrderBillState()
   {
      return this.orderBillState;
   }

   public void setOrderBillState(String orderBillState)
   {
      this.orderBillState = orderBillState;
   }

   @Column(name = "order_bill_zip", nullable = false, length = 20)
   public String getOrderBillZip()
   {
      return this.orderBillZip;
   }

   public void setOrderBillZip(String orderBillZip)
   {
      this.orderBillZip = orderBillZip;
   }

   @Column(name = "order_bill_country", nullable = false, length = 50)
   public String getOrderBillCountry()
   {
      return this.orderBillCountry;
   }

   public void setOrderBillCountry(String orderBillCountry)
   {
      this.orderBillCountry = orderBillCountry;
   }

   @Column(name = "order_bill_phone", nullable = false, length = 20)
   public String getOrderBillPhone()
   {
      return this.orderBillPhone;
   }

   public void setOrderBillPhone(String orderBillPhone)
   {
      this.orderBillPhone = orderBillPhone;
   }

   @Column(name = "order_bill_fax", nullable = false, length = 20)
   public String getOrderBillFax()
   {
      return this.orderBillFax;
   }

   public void setOrderBillFax(String orderBillFax)
   {
      this.orderBillFax = orderBillFax;
   }

   @Column(name = "order_payment_mode", nullable = false, length = 50)
   public String getOrderPaymentMode()
   {
      return this.orderPaymentMode;
   }

   public void setOrderPaymentMode(String orderPaymentMode)
   {
      this.orderPaymentMode = orderPaymentMode;
   }

   @Column(name = "order_payment_desc", length = 50)
   public String getOrderPaymentDesc()
   {
      return this.orderPaymentDesc;
   }

   public void setOrderPaymentDesc(String orderPaymentDesc)
   {
      this.orderPaymentDesc = orderPaymentDesc;
   }

   @Column(name = "order_email", nullable = false, length = 100)
   public String getOrderEmail()
   {
      return this.orderEmail;
   }

   public void setOrderEmail(String orderEmail)
   {
      this.orderEmail = orderEmail;
   }

   @Temporal(TemporalType.TIMESTAMP)
   @Column(name = "order_date", nullable = false, length = 19)
   public Date getOrderDate()
   {
      return this.orderDate;
   }

   public void setOrderDate(Date orderDate)
   {
      this.orderDate = orderDate;
   }

   @Column(name = "order_shipped",  columnDefinition = "BIT" ,nullable = false)
   public boolean isOrderShipped()
   {
      return this.orderShipped;
   }

   public void setOrderShipped(boolean orderShipped)
   {
      this.orderShipped = orderShipped;
   }

   @Column(name = "order_tracking_no", length = 80)
   public String getOrderTrackingNo()
   {
      return this.orderTrackingNo;
   }

   public void setOrderTrackingNo(String orderTrackingNo)
   {
      this.orderTrackingNo = orderTrackingNo;
   }

   @Column(name = "order_status", length = 20)
   public String getOrderStatus()
   {
      return this.orderStatus;
   }

   public void setOrderStatus(String orderStatus)
   {
      this.orderStatus = orderStatus;
   }

   @OneToMany(fetch = FetchType.EAGER, mappedBy = "akOrders", cascade={CascadeType.ALL} )
   public Set<AkOrderDetails> getAkOrderDetailses()
   {
      return this.akOrderDetailses;
   }

   public void setAkOrderDetailses(Set<AkOrderDetails> akOrderDetailses)
   {
      this.akOrderDetailses = akOrderDetailses;
   }

}