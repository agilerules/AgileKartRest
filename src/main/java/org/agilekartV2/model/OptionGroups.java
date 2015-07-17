package org.agilekartV2.model;

// Generated Jul 16, 2015 1:41:40 PM by Hibernate Tools 4.3.1

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * OptionGroups generated by hbm2java
 */
@Entity
@Table(name = "option_groups"
      , catalog = "agilekartV2"
      , uniqueConstraints = @UniqueConstraint(columnNames = "option_group_desc"))
@XmlRootElement
public class OptionGroups implements java.io.Serializable
{

   private String optionGroupId;
   private String optionGroupName;
   private String optionGroupDesc;
   private String lastUpdateUserId;
   private Date lastUpdateTs;

   public OptionGroups()
   {
   }

   public OptionGroups(String optionGroupId, String optionGroupName, String optionGroupDesc)
   {
      this.optionGroupId = optionGroupId;
      this.optionGroupName = optionGroupName;
      this.optionGroupDesc = optionGroupDesc;
   }

   public OptionGroups(String optionGroupId, String optionGroupName, String optionGroupDesc, String lastUpdateUserId, Date lastUpdateTs)
   {
      this.optionGroupId = optionGroupId;
      this.optionGroupName = optionGroupName;
      this.optionGroupDesc = optionGroupDesc;
      this.lastUpdateUserId = lastUpdateUserId;
      this.lastUpdateTs = lastUpdateTs;
   }

   @Id
   @Column(name = "option_group_id", unique = true, nullable = false, length = 45)
   public String getOptionGroupId()
   {
      return this.optionGroupId;
   }

   public void setOptionGroupId(String optionGroupId)
   {
      this.optionGroupId = optionGroupId;
   }

   @Column(name = "option_group_name", nullable = false, length = 50)
   public String getOptionGroupName()
   {
      return this.optionGroupName;
   }

   public void setOptionGroupName(String optionGroupName)
   {
      this.optionGroupName = optionGroupName;
   }

   @Column(name = "option_group_desc", unique = true, nullable = false, length = 45)
   public String getOptionGroupDesc()
   {
      return this.optionGroupDesc;
   }

   public void setOptionGroupDesc(String optionGroupDesc)
   {
      this.optionGroupDesc = optionGroupDesc;
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
