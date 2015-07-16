package org.AgileKartRest.entity;
// Generated 31 May, 2015 10:07:36 AM by Hibernate Tools 4.3.1


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * AkUserAddress generated by hbm2java
 */
@Entity
@Table(name="ak_user_address"
    ,catalog="agilekart"
)
public class AkUserAddress  implements java.io.Serializable {


     private Integer addressId;
     private AkUsers akUsers;
     private String userTypeName;
     private String userFirstName;
     private String userLastName;
     private String userAddress;
     private String userAddress2;
     private String userCity;
     private String userState;
     private String userZip;
     private String userPhone;
     private String userFax;
     private String userCountry;

    public AkUserAddress() {
    }

	
    public AkUserAddress(AkUsers akUsers) {
        this.akUsers = akUsers;
    }
    public AkUserAddress(AkUsers akUsers, String userTypeName, String userFirstName, String userLastName, String userAddress, String userAddress2, String userCity, String userState, String userZip, String userPhone, String userFax, String userCountry) {
       this.akUsers = akUsers;
       this.userTypeName = userTypeName;
       this.userFirstName = userFirstName;
       this.userLastName = userLastName;
       this.userAddress = userAddress;
       this.userAddress2 = userAddress2;
       this.userCity = userCity;
       this.userState = userState;
       this.userZip = userZip;
       this.userPhone = userPhone;
       this.userFax = userFax;
       this.userCountry = userCountry;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="address_id", unique=true, nullable=false)
    public Integer getAddressId() {
        return this.addressId;
    }
    
    public void setAddressId(Integer addressId) {
        this.addressId = addressId;
    }

@ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="user_id", nullable=false)
    public AkUsers getAkUsers() {
        return this.akUsers;
    }
    
    public void setAkUsers(AkUsers akUsers) {
        this.akUsers = akUsers;
    }

    
    @Column(name="user_type_name", length=50)
    public String getUserTypeName() {
        return this.userTypeName;
    }
    
    public void setUserTypeName(String userTypeName) {
        this.userTypeName = userTypeName;
    }

    
    @Column(name="user_first_name", length=50)
    public String getUserFirstName() {
        return this.userFirstName;
    }
    
    public void setUserFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
    }

    
    @Column(name="user_last_name", length=50)
    public String getUserLastName() {
        return this.userLastName;
    }
    
    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    
    @Column(name="user_address", length=100)
    public String getUserAddress() {
        return this.userAddress;
    }
    
    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }

    
    @Column(name="user_address2", length=50)
    public String getUserAddress2() {
        return this.userAddress2;
    }
    
    public void setUserAddress2(String userAddress2) {
        this.userAddress2 = userAddress2;
    }

    
    @Column(name="user_city", length=90)
    public String getUserCity() {
        return this.userCity;
    }
    
    public void setUserCity(String userCity) {
        this.userCity = userCity;
    }

    
    @Column(name="user_state", length=20)
    public String getUserState() {
        return this.userState;
    }
    
    public void setUserState(String userState) {
        this.userState = userState;
    }

    
    @Column(name="user_zip", length=12)
    public String getUserZip() {
        return this.userZip;
    }
    
    public void setUserZip(String userZip) {
        this.userZip = userZip;
    }

    
    @Column(name="user_phone", length=20)
    public String getUserPhone() {
        return this.userPhone;
    }
    
    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    
    @Column(name="user_fax", length=20)
    public String getUserFax() {
        return this.userFax;
    }
    
    public void setUserFax(String userFax) {
        this.userFax = userFax;
    }

    
    @Column(name="user_country", length=20)
    public String getUserCountry() {
        return this.userCountry;
    }
    
    public void setUserCountry(String userCountry) {
        this.userCountry = userCountry;
    }




}


