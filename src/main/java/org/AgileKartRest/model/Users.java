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
 * Users generated by hbm2java
 */
@Entity
@Table(name = "users"
      , catalog = "agilekartv2")
@JsonIgnoreProperties({ "orderses","productReviews","userRewardses","userAddresses","userFavouriteses","merchantReviews"})
@XmlRootElement
public class Users implements java.io.Serializable
{
	private static final long serialVersionUID = 958029491927227169L;
private String userId;
   private String userEmail;
   private String userPassword;
   private String userFirstName;
   private String userLastName;
   private Boolean userEmailVerified;
   private Date userRegistrationDate;
   private String userVerificationCode;
   private Integer userRewardPoints;
   private String userPhoneNo;
   private String lastUpdateUserId;
   private Date lastUpdateTs;
   private Set<Orders> orderses = new HashSet<Orders>(0);
   private Set<ProductReview> productReviews = new HashSet<ProductReview>(0);
   private Set<UserRewards> userRewardses = new HashSet<UserRewards>(0);
   private Set<UserAddress> userAddresses = new HashSet<UserAddress>(0);
   private Set<UserFavourites> userFavouriteses = new HashSet<UserFavourites>(0);
   private Set<MerchantReview> merchantReviews = new HashSet<MerchantReview>(0);

   public Users()
   {
   }

   public Users(String userId)
   {
      this.userId = userId;
   }

   public Users(String userId, String userEmail, String userPassword, String userFirstName, String userLastName, Boolean userEmailVerified, Date userRegistrationDate, String userVerificationCode, Integer userRewardPoints, String userPhoneNo, String lastUpdateUserId, Date lastUpdateTs, Set<Orders> orderses, Set<ProductReview> productReviews, Set<UserRewards> userRewardses, Set<UserAddress> userAddresses, Set<UserFavourites> userFavouriteses, Set<MerchantReview> merchantReviews)
   {
      this.userId = userId;
      this.userEmail = userEmail;
      this.userPassword = userPassword;
      this.userFirstName = userFirstName;
      this.userLastName = userLastName;
      this.userEmailVerified = userEmailVerified;
      this.userRegistrationDate = userRegistrationDate;
      this.userVerificationCode = userVerificationCode;
      this.userRewardPoints = userRewardPoints;
      this.userPhoneNo = userPhoneNo;
      this.lastUpdateUserId = lastUpdateUserId;
      this.lastUpdateTs = lastUpdateTs;
      this.orderses = orderses;
      this.productReviews = productReviews;
      this.userRewardses = userRewardses;
      this.userAddresses = userAddresses;
      this.userFavouriteses = userFavouriteses;
      this.merchantReviews = merchantReviews;
   }

   @Id
   @Column(name = "user_id", unique = true, nullable = false, length = 45)
   public String getUserId()
   {
      return this.userId;
   }

   public void setUserId(String userId)
   {
      this.userId = userId;
   }

   @Column(name = "user_email", length = 500)
   public String getUserEmail()
   {
      return this.userEmail;
   }

   public void setUserEmail(String userEmail)
   {
      this.userEmail = userEmail;
   }

   @Column(name = "user_password", length = 500)
   public String getUserPassword()
   {
      return this.userPassword;
   }

   public void setUserPassword(String userPassword)
   {
      this.userPassword = userPassword;
   }

   @Column(name = "user_first_name", length = 50)
   public String getUserFirstName()
   {
      return this.userFirstName;
   }

   public void setUserFirstName(String userFirstName)
   {
      this.userFirstName = userFirstName;
   }

   @Column(name = "user_last_name", length = 50)
   public String getUserLastName()
   {
      return this.userLastName;
   }

   public void setUserLastName(String userLastName)
   {
      this.userLastName = userLastName;
   }

   @Column(name = "user_email_verified", columnDefinition = "BIT")
   public Boolean getUserEmailVerified()
   {
      return this.userEmailVerified;
   }

   public void setUserEmailVerified(Boolean userEmailVerified)
   {
      this.userEmailVerified = userEmailVerified;
   }

   @Temporal(TemporalType.TIMESTAMP)
   @Column(name = "user_registration_date", length = 19)
   public Date getUserRegistrationDate()
   {
      return this.userRegistrationDate;
   }

   public void setUserRegistrationDate(Date userRegistrationDate)
   {
      this.userRegistrationDate = userRegistrationDate;
   }

   @Column(name = "user_verification_code", length = 20)
   public String getUserVerificationCode()
   {
      return this.userVerificationCode;
   }

   public void setUserVerificationCode(String userVerificationCode)
   {
      this.userVerificationCode = userVerificationCode;
   }

   @Column(name = "user_reward_points")
   public Integer getUserRewardPoints()
   {
      return this.userRewardPoints;
   }

   public void setUserRewardPoints(Integer userRewardPoints)
   {
      this.userRewardPoints = userRewardPoints;
   }

   @Column(name = "user_phone_no", length = 20)
   public String getUserPhoneNo()
   {
      return this.userPhoneNo;
   }

   public void setUserPhoneNo(String userPhoneNo)
   {
      this.userPhoneNo = userPhoneNo;
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

   @OneToMany(fetch = FetchType.LAZY, mappedBy = "users")
   public Set<Orders> getOrderses()
   {
      return this.orderses;
   }

   public void setOrderses(Set<Orders> orderses)
   {
      this.orderses = orderses;
   }

   @OneToMany(fetch = FetchType.LAZY, mappedBy = "users")
   public Set<ProductReview> getProductReviews()
   {
      return this.productReviews;
   }

   public void setProductReviews(Set<ProductReview> productReviews)
   {
      this.productReviews = productReviews;
   }

   @OneToMany(fetch = FetchType.LAZY, mappedBy = "users")
   public Set<UserRewards> getUserRewardses()
   {
      return this.userRewardses;
   }

   public void setUserRewardses(Set<UserRewards> userRewardses)
   {
      this.userRewardses = userRewardses;
   }

   @OneToMany(fetch = FetchType.LAZY, mappedBy = "users")
   public Set<UserAddress> getUserAddresses()
   {
      return this.userAddresses;
   }

   public void setUserAddresses(Set<UserAddress> userAddresses)
   {
      this.userAddresses = userAddresses;
   }

   @OneToMany(fetch = FetchType.LAZY, mappedBy = "users")
   public Set<UserFavourites> getUserFavouriteses()
   {
      return this.userFavouriteses;
   }

   public void setUserFavouriteses(Set<UserFavourites> userFavouriteses)
   {
      this.userFavouriteses = userFavouriteses;
   }

   @OneToMany(fetch = FetchType.LAZY, mappedBy = "users")
   public Set<MerchantReview> getMerchantReviews()
   {
      return this.merchantReviews;
   }

   public void setMerchantReviews(Set<MerchantReview> merchantReviews)
   {
      this.merchantReviews = merchantReviews;
   }

}