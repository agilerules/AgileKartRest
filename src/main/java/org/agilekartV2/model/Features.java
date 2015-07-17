package org.agilekartV2.model;

// Generated Jul 16, 2015 1:41:40 PM by Hibernate Tools 4.3.1

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Features generated by hbm2java
 */
@Entity
@Table(name = "features"
      , catalog = "agilekartV2")
@XmlRootElement
public class Features implements java.io.Serializable
{

   private String featureId;
   private String featureName;
   private String lastUpdateUserId;
   private Date lastUpdateTs;

   public Features()
   {
   }

   public Features(String featureId)
   {
      this.featureId = featureId;
   }

   public Features(String featureId, String featureName, String lastUpdateUserId, Date lastUpdateTs)
   {
      this.featureId = featureId;
      this.featureName = featureName;
      this.lastUpdateUserId = lastUpdateUserId;
      this.lastUpdateTs = lastUpdateTs;
   }

   @Id
   @Column(name = "feature_id", unique = true, nullable = false, length = 45)
   public String getFeatureId()
   {
      return this.featureId;
   }

   public void setFeatureId(String featureId)
   {
      this.featureId = featureId;
   }

   @Column(name = "feature_name", length = 45)
   public String getFeatureName()
   {
      return this.featureName;
   }

   public void setFeatureName(String featureName)
   {
      this.featureName = featureName;
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
