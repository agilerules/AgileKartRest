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
 * MerchantPaymentGateway generated by hbm2java
 */
@Entity
@Table(name = "merchant_payment_gateway"
      , catalog = "agilekartv2")
@XmlRootElement
public class MerchantPaymentGateway implements java.io.Serializable
{
	private static final long serialVersionUID = -222968892683780102L;
private String merchantPaymentGatewayId;
   private Merchant merchant;
   private PaymentGateway paymentGateway;
   private String lastUpdateUserId;
   private Date lastUpdateTs;

   public MerchantPaymentGateway()
   {
   }

   public MerchantPaymentGateway(String merchantPaymentGatewayId, Merchant merchant, PaymentGateway paymentGateway)
   {
      this.merchantPaymentGatewayId = merchantPaymentGatewayId;
      this.merchant = merchant;
      this.paymentGateway = paymentGateway;
   }

   public MerchantPaymentGateway(String merchantPaymentGatewayId, Merchant merchant, PaymentGateway paymentGateway, String lastUpdateUserId, Date lastUpdateTs)
   {
      this.merchantPaymentGatewayId = merchantPaymentGatewayId;
      this.merchant = merchant;
      this.paymentGateway = paymentGateway;
      this.lastUpdateUserId = lastUpdateUserId;
      this.lastUpdateTs = lastUpdateTs;
   }

   @Id
   @Column(name = "merchant_payment_gateway_id", unique = true, nullable = false, length = 45)
   public String getMerchantPaymentGatewayId()
   {
      return this.merchantPaymentGatewayId;
   }

   public void setMerchantPaymentGatewayId(String merchantPaymentGatewayId)
   {
      this.merchantPaymentGatewayId = merchantPaymentGatewayId;
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

   @ManyToOne(fetch = FetchType.EAGER)
   @JoinColumn(name = "payment_gateway_id", nullable = false)
   public PaymentGateway getPaymentGateway()
   {
      return this.paymentGateway;
   }

   public void setPaymentGateway(PaymentGateway paymentGateway)
   {
      this.paymentGateway = paymentGateway;
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
