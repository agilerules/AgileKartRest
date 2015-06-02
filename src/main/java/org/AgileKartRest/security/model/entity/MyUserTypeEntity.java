/*
 * JBoss, Home of Professional Open Source.
 * Copyright 2012, Red Hat, Inc., and individual contributors
 * as indicated by the @author tags. See the copyright.txt file in the
 * distribution for a full listing of individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */
package org.AgileKartRest.security.model.entity;

import org.AgileKartRest.entity.AkUsers;
import org.AgileKartRest.security.model.MyUser;
import org.picketlink.idm.jpa.annotations.AttributeValue;
import org.picketlink.idm.jpa.annotations.entity.IdentityManaged;
import org.picketlink.idm.jpa.model.sample.simple.IdentityTypeEntity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

/**
 * <p>This is a simple example about how to extend the entity classes provided by the Basic Identity Model to map your own types.
 * In this case, this entity is responsible to map {@link org.AgileKartRest.security.model.MyUser}.</p>
 *
 * <p>You are not forced to use the Basic Identity Model all the time. This is just an example.</p>
 *
 * @author Pedro Igor
 */
@Entity
@IdentityManaged(MyUser.class)
public class MyUserTypeEntity extends IdentityTypeEntity {
	
    @AttributeValue
    private String loginName;

    @AttributeValue
    private String activationCode;

    @AttributeValue
    @OneToOne (cascade = CascadeType.ALL)
    private AkUsers person;

    public String getLoginName() {
        return this.loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public String getActivationCode() {
        return this.activationCode;
    }

    public void setActivationCode(String activationCode) {
        this.activationCode = activationCode;
        person.setUserVerificationCode(activationCode);
    }

    public AkUsers getPerson() {
        return this.person;
    }

    public void setPerson(AkUsers person) {
        this.person = person;
    }
}