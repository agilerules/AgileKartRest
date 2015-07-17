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
 * Category generated by hbm2java
 */
@Entity
@Table(name = "category"
      , catalog = "agilekartV2")
@XmlRootElement
public class Category implements java.io.Serializable
{

   private String categoryId;
   private String categoryName;
   private String lastUpdateUserId;
   private Date lastUpdateTs;

   public Category()
   {
   }

   public Category(String categoryId)
   {
      this.categoryId = categoryId;
   }

   public Category(String categoryId, String categoryName, String lastUpdateUserId, Date lastUpdateTs)
   {
      this.categoryId = categoryId;
      this.categoryName = categoryName;
      this.lastUpdateUserId = lastUpdateUserId;
      this.lastUpdateTs = lastUpdateTs;
   }

   @Id
   @Column(name = "category_id", unique = true, nullable = false, length = 45)
   public String getCategoryId()
   {
      return this.categoryId;
   }

   public void setCategoryId(String categoryId)
   {
      this.categoryId = categoryId;
   }

   @Column(name = "category_name", length = 45)
   public String getCategoryName()
   {
      return this.categoryName;
   }

   public void setCategoryName(String categoryName)
   {
      this.categoryName = categoryName;
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
