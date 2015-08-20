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
 * UserRewards generated by hbm2java
 */
@Entity
@Table(name = "user_rewards"
      , catalog = "agilekartv2")
@XmlRootElement
public class UserRewards implements java.io.Serializable
{
	private static final long serialVersionUID = 540090370782068123L;
private String rewardId;
   private LoyaltyProgramTier loyaltyProgramTier;
   private Orders orders;
   private Users users;
   private Integer pointsEarned;
   private Integer pointsRedeemed;
   private Date expiryDate;
   private Date pointsEarnedDate;
   private Date pointsRedeeemedDate;
   private Integer totalPointsEarned;
   private Integer totalPointsRedeemed;
   private String lastUpdateUserId;
   private Date lastUpdateTs;

   public UserRewards()
   {
   }

   public UserRewards(String rewardId, LoyaltyProgramTier loyaltyProgramTier, Orders orders, Users users)
   {
      this.rewardId = rewardId;
      this.loyaltyProgramTier = loyaltyProgramTier;
      this.orders = orders;
      this.users = users;
   }

   public UserRewards(String rewardId, LoyaltyProgramTier loyaltyProgramTier, Orders orders, Users users, Integer pointsEarned, Integer pointsRedeemed, Date expiryDate, Date pointsEarnedDate, Date pointsRedeeemedDate, Integer totalPointsEarned, Integer totalPointsRedeemed, String lastUpdateUserId, Date lastUpdateTs)
   {
      this.rewardId = rewardId;
      this.loyaltyProgramTier = loyaltyProgramTier;
      this.orders = orders;
      this.users = users;
      this.pointsEarned = pointsEarned;
      this.pointsRedeemed = pointsRedeemed;
      this.expiryDate = expiryDate;
      this.pointsEarnedDate = pointsEarnedDate;
      this.pointsRedeeemedDate = pointsRedeeemedDate;
      this.totalPointsEarned = totalPointsEarned;
      this.totalPointsRedeemed = totalPointsRedeemed;
      this.lastUpdateUserId = lastUpdateUserId;
      this.lastUpdateTs = lastUpdateTs;
   }

   @Id
   @Column(name = "reward_id", unique = true, nullable = false, length = 45)
   public String getRewardId()
   {
      return this.rewardId;
   }

   public void setRewardId(String rewardId)
   {
      this.rewardId = rewardId;
   }

   @ManyToOne(fetch = FetchType.LAZY)
   @JoinColumn(name = "tier_id", nullable = false)
   public LoyaltyProgramTier getLoyaltyProgramTier()
   {
      return this.loyaltyProgramTier;
   }

   public void setLoyaltyProgramTier(LoyaltyProgramTier loyaltyProgramTier)
   {
      this.loyaltyProgramTier = loyaltyProgramTier;
   }

   @ManyToOne(fetch = FetchType.LAZY)
   @JoinColumn(name = "order_id", nullable = false)
   public Orders getOrders()
   {
      return this.orders;
   }

   public void setOrders(Orders orders)
   {
      this.orders = orders;
   }

   @ManyToOne(fetch = FetchType.LAZY)
   @JoinColumn(name = "user_id", nullable = false)
   public Users getUsers()
   {
      return this.users;
   }

   public void setUsers(Users users)
   {
      this.users = users;
   }

   @Column(name = "points_earned")
   public Integer getPointsEarned()
   {
      return this.pointsEarned;
   }

   public void setPointsEarned(Integer pointsEarned)
   {
      this.pointsEarned = pointsEarned;
   }

   @Column(name = "points_redeemed")
   public Integer getPointsRedeemed()
   {
      return this.pointsRedeemed;
   }

   public void setPointsRedeemed(Integer pointsRedeemed)
   {
      this.pointsRedeemed = pointsRedeemed;
   }

   @Temporal(TemporalType.DATE)
   @Column(name = "expiry_date", length = 10)
   public Date getExpiryDate()
   {
      return this.expiryDate;
   }

   public void setExpiryDate(Date expiryDate)
   {
      this.expiryDate = expiryDate;
   }

   @Temporal(TemporalType.DATE)
   @Column(name = "points_earned_date", length = 10)
   public Date getPointsEarnedDate()
   {
      return this.pointsEarnedDate;
   }

   public void setPointsEarnedDate(Date pointsEarnedDate)
   {
      this.pointsEarnedDate = pointsEarnedDate;
   }

   @Temporal(TemporalType.DATE)
   @Column(name = "points_redeeemed_date", length = 10)
   public Date getPointsRedeeemedDate()
   {
      return this.pointsRedeeemedDate;
   }

   public void setPointsRedeeemedDate(Date pointsRedeeemedDate)
   {
      this.pointsRedeeemedDate = pointsRedeeemedDate;
   }

   @Column(name = "total_points_earned")
   public Integer getTotalPointsEarned()
   {
      return this.totalPointsEarned;
   }

   public void setTotalPointsEarned(Integer totalPointsEarned)
   {
      this.totalPointsEarned = totalPointsEarned;
   }

   @Column(name = "total_points_redeemed")
   public Integer getTotalPointsRedeemed()
   {
      return this.totalPointsRedeemed;
   }

   public void setTotalPointsRedeemed(Integer totalPointsRedeemed)
   {
      this.totalPointsRedeemed = totalPointsRedeemed;
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