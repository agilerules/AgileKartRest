package org.AgileKartRest.model;

// Generated 12 Aug, 2015 11:27:47 PM by Hibernate Tools 4.3.1

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

/**
 * PaymentGateway generated by hbm2java
 */
@Entity
@Table(name = "payment_gateway"
      , catalog = "agilekartv2")
      @JsonIgnoreProperties({ "merchantPaymentGateways","orderses"})
@XmlRootElement
public class PaymentGateway implements java.io.Serializable
{
	private static final long serialVersionUID = 2737497685930115668L;
private String paymentGatewayId;
   private String paymentGatewayName;
   private String paymentGatewayDesc;
   private String lastUpdateUserId;
   private Date lastUpdateTs;
   private Set<MerchantPaymentGateway> merchantPaymentGateways = new HashSet<MerchantPaymentGateway>(0);
   private Set<Orders> orderses = new HashSet<Orders>(0);

   public PaymentGateway()
   {
   }

   public PaymentGateway(String paymentGatewayId)
   {
      this.paymentGatewayId = paymentGatewayId;
   }

   public PaymentGateway(String paymentGatewayId, String paymentGatewayName, String paymentGatewayDesc, String lastUpdateUserId, Date lastUpdateTs, Set<MerchantPaymentGateway> merchantPaymentGateways, Set<Orders> orderses)
   {
      this.paymentGatewayId = paymentGatewayId;
      this.paymentGatewayName = paymentGatewayName;
      this.paymentGatewayDesc = paymentGatewayDesc;
      this.lastUpdateUserId = lastUpdateUserId;
      this.lastUpdateTs = lastUpdateTs;
      this.merchantPaymentGateways = merchantPaymentGateways;
      this.orderses = orderses;
   }

   @Id
   @Column(name = "payment_gateway_id", unique = true, nullable = false, length = 45)
   public String getPaymentGatewayId()
   {
      return this.paymentGatewayId;
   }

   public void setPaymentGatewayId(String paymentGatewayId)
   {
      this.paymentGatewayId = paymentGatewayId;
   }

   @Column(name = "payment_gateway_name", length = 45)
   public String getPaymentGatewayName()
   {
      return this.paymentGatewayName;
   }

   public void setPaymentGatewayName(String paymentGatewayName)
   {
      this.paymentGatewayName = paymentGatewayName;
   }

   @Column(name = "payment_gateway_desc", length = 500)
   public String getPaymentGatewayDesc()
   {
      return this.paymentGatewayDesc;
   }

   public void setPaymentGatewayDesc(String paymentGatewayDesc)
   {
      this.paymentGatewayDesc = paymentGatewayDesc;
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

   @OneToMany(fetch = FetchType.EAGER, mappedBy = "paymentGateway")
   public Set<MerchantPaymentGateway> getMerchantPaymentGateways()
   {
      return this.merchantPaymentGateways;
   }

   public void setMerchantPaymentGateways(Set<MerchantPaymentGateway> merchantPaymentGateways)
   {
      this.merchantPaymentGateways = merchantPaymentGateways;
   }

   @OneToMany(fetch = FetchType.EAGER, mappedBy = "paymentGateway")
   public Set<Orders> getOrderses()
   {
      return this.orderses;
   }

   public void setOrderses(Set<Orders> orderses)
   {
      this.orderses = orderses;
   }

}
