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
 * ProductReview generated by hbm2java
 */
@Entity
@Table(name = "product_review"
      , catalog = "agilekartv2")
@XmlRootElement
public class ProductReview implements java.io.Serializable
{
	private static final long serialVersionUID = 121131603536793540L;
private String productReviewId;
   private Product product;
   private Users users;
   private Integer productRating;
   private String productReviewComment;
   private String lastUpdateUserId;
   private Date lastUpdateTs;

   public ProductReview()
   {
   }

   public ProductReview(String productReviewId, Product product, Users users)
   {
      this.productReviewId = productReviewId;
      this.product = product;
      this.users = users;
   }

   public ProductReview(String productReviewId, Product product, Users users, Integer productRating, String productReviewComment, String lastUpdateUserId, Date lastUpdateTs)
   {
      this.productReviewId = productReviewId;
      this.product = product;
      this.users = users;
      this.productRating = productRating;
      this.productReviewComment = productReviewComment;
      this.lastUpdateUserId = lastUpdateUserId;
      this.lastUpdateTs = lastUpdateTs;
   }

   @Id
   @Column(name = "product_review_id", unique = true, nullable = false, length = 45)
   public String getProductReviewId()
   {
      return this.productReviewId;
   }

   public void setProductReviewId(String productReviewId)
   {
      this.productReviewId = productReviewId;
   }

   @ManyToOne(fetch = FetchType.EAGER)
   @JoinColumn(name = "product_id", nullable = false)
   public Product getProduct()
   {
      return this.product;
   }

   public void setProduct(Product product)
   {
      this.product = product;
   }

   @ManyToOne(fetch = FetchType.EAGER)
   @JoinColumn(name = "user_id", nullable = false)
   public Users getUsers()
   {
      return this.users;
   }

   public void setUsers(Users users)
   {
      this.users = users;
   }

   @Column(name = "product_rating")
   public Integer getProductRating()
   {
      return this.productRating;
   }

   public void setProductRating(Integer productRating)
   {
      this.productRating = productRating;
   }

   @Column(name = "product_review_comment", length = 500)
   public String getProductReviewComment()
   {
      return this.productReviewComment;
   }

   public void setProductReviewComment(String productReviewComment)
   {
      this.productReviewComment = productReviewComment;
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
