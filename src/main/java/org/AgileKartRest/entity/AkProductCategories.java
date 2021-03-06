package org.AgileKartRest.entity;

// Generated 21 Jun, 2015 11:28:57 AM by Hibernate Tools 4.3.1

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.xml.bind.annotation.XmlRootElement;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

/**
 * AkProductCategories generated by hbm2java
 */
@Entity
@Table(name = "ak_product_categories"
      , catalog = "agilekart"
      , uniqueConstraints = @UniqueConstraint(columnNames = "category_name"))
@JsonIgnoreProperties({ "akProductses","akCategoryOptionses"})
@XmlRootElement
public class AkProductCategories implements java.io.Serializable
{

	private static final long serialVersionUID = -5536037119023206877L;
	private Integer categoryId;
   private String categoryName;
   private Set<AkProducts> akProductses = new HashSet<AkProducts>(0);
   private Set<AkCategoryOptions> akCategoryOptionses = new HashSet<AkCategoryOptions>(0);

   public AkProductCategories()
   {
   }

   public AkProductCategories(String categoryName)
   {
      this.categoryName = categoryName;
   }

   public AkProductCategories(String categoryName, Set<AkProducts> akProductses, Set<AkCategoryOptions> akCategoryOptionses)
   {
      this.categoryName = categoryName;
      this.akProductses = akProductses;
      this.akCategoryOptionses = akCategoryOptionses;
   }

   @Id
   @GeneratedValue(strategy = IDENTITY)
   @Column(name = "category_id", unique = true, nullable = false)
   public Integer getCategoryId()
   {
      return this.categoryId;
   }

   public void setCategoryId(Integer categoryId)
   {
      this.categoryId = categoryId;
   }

   @Column(name = "category_name", unique = true, nullable = false, length = 50)
   public String getCategoryName()
   {
      return this.categoryName;
   }

   public void setCategoryName(String categoryName)
   {
      this.categoryName = categoryName;
   }

   @OneToMany(fetch = FetchType.EAGER, mappedBy = "akProductCategories")
   public Set<AkProducts> getAkProductses()
   {
      return this.akProductses;
   }

   public void setAkProductses(Set<AkProducts> akProductses)
   {
      this.akProductses = akProductses;
   }

   @OneToMany(fetch = FetchType.EAGER, mappedBy = "akProductCategories")
   public Set<AkCategoryOptions> getAkCategoryOptionses()
   {
      return this.akCategoryOptionses;
   }

   public void setAkCategoryOptionses(Set<AkCategoryOptions> akCategoryOptionses)
   {
      this.akCategoryOptionses = akCategoryOptionses;
   }

}
