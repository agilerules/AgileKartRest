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
 * FeatureOptions generated by hbm2java
 */
@Entity
@Table(name = "feature_options"
      , catalog = "agilekartV2")
@XmlRootElement
public class FeatureOptions implements java.io.Serializable
{

   private String featureOptionsId;
   private String featureId;
   private String featureOptionName;
   private String lastUpdateUserId;
   private Date lastUpdateTs;

   public FeatureOptions()
   {
   }

   public FeatureOptions(String featureOptionsId, String featureId)
   {
      this.featureOptionsId = featureOptionsId;
      this.featureId = featureId;
   }

   public FeatureOptions(String featureOptionsId, String featureId, String featureOptionName, String lastUpdateUserId, Date lastUpdateTs)
   {
      this.featureOptionsId = featureOptionsId;
      this.featureId = featureId;
      this.featureOptionName = featureOptionName;
      this.lastUpdateUserId = lastUpdateUserId;
      this.lastUpdateTs = lastUpdateTs;
   }

   @Id
   @Column(name = "feature_options_id", unique = true, nullable = false, length = 45)
   public String getFeatureOptionsId()
   {
      return this.featureOptionsId;
   }

   public void setFeatureOptionsId(String featureOptionsId)
   {
      this.featureOptionsId = featureOptionsId;
   }

   @Column(name = "feature_id", nullable = false, length = 45)
   public String getFeatureId()
   {
      return this.featureId;
   }

   public void setFeatureId(String featureId)
   {
      this.featureId = featureId;
   }

   @Column(name = "feature_option_name", length = 45)
   public String getFeatureOptionName()
   {
      return this.featureOptionName;
   }

   public void setFeatureOptionName(String featureOptionName)
   {
      this.featureOptionName = featureOptionName;
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
