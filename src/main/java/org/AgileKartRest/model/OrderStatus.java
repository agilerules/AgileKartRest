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
 * OrderStatus generated by hbm2java
 */
@Entity
@Table(name = "order_status"
      , catalog = "agilekartv2")
@XmlRootElement
public class OrderStatus implements java.io.Serializable
{
	private static final long serialVersionUID = -8248737527251929776L;
private String orderStatusId;
   private OrderStatusDesc orderStatusDesc;
   private Orders orders;
   private String orderStatusComment;
   private Character orderStatusIsActive;
   private String lastUpdateUserId;
   private Date lastUpdateTs;

   public OrderStatus()
   {
   }

   public OrderStatus(String orderStatusId, OrderStatusDesc orderStatusDesc, Orders orders)
   {
      this.orderStatusId = orderStatusId;
      this.orderStatusDesc = orderStatusDesc;
      this.orders = orders;
   }

   public OrderStatus(String orderStatusId, OrderStatusDesc orderStatusDesc, Orders orders, String orderStatusComment, Character orderStatusIsActive, String lastUpdateUserId, Date lastUpdateTs)
   {
      this.orderStatusId = orderStatusId;
      this.orderStatusDesc = orderStatusDesc;
      this.orders = orders;
      this.orderStatusComment = orderStatusComment;
      this.orderStatusIsActive = orderStatusIsActive;
      this.lastUpdateUserId = lastUpdateUserId;
      this.lastUpdateTs = lastUpdateTs;
   }

   @Id
   @Column(name = "order_status_id", unique = true, nullable = false, length = 45)
   public String getOrderStatusId()
   {
      return this.orderStatusId;
   }

   public void setOrderStatusId(String orderStatusId)
   {
      this.orderStatusId = orderStatusId;
   }

   @ManyToOne(fetch = FetchType.EAGER)
   @JoinColumn(name = "order_status_desc_id", nullable = false)
   public OrderStatusDesc getOrderStatusDesc()
   {
      return this.orderStatusDesc;
   }

   public void setOrderStatusDesc(OrderStatusDesc orderStatusDesc)
   {
      this.orderStatusDesc = orderStatusDesc;
   }

   @ManyToOne(fetch = FetchType.EAGER)
   @JoinColumn(name = "order_id", nullable = false)
   public Orders getOrders()
   {
      return this.orders;
   }

   public void setOrders(Orders orders)
   {
      this.orders = orders;
   }

   @Column(name = "order_status_comment", length = 500)
   public String getOrderStatusComment()
   {
      return this.orderStatusComment;
   }

   public void setOrderStatusComment(String orderStatusComment)
   {
      this.orderStatusComment = orderStatusComment;
   }

   @Column(name = "order_status_is_active", length = 1)
   public Character getOrderStatusIsActive()
   {
      return this.orderStatusIsActive;
   }

   public void setOrderStatusIsActive(Character orderStatusIsActive)
   {
      this.orderStatusIsActive = orderStatusIsActive;
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
