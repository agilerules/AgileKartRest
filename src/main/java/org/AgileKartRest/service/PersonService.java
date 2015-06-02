package org.AgileKartRest.service;

import org.AgileKartRest.entity.AkUsers;
import org.picketlink.authorization.annotations.LoggedIn;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import java.util.List;

@Path("/private/person")
@Stateless
@LoggedIn
public class PersonService {

    @Inject
    private EntityManager em;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<AkUsers> getAll() {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<AkUsers> criteria = cb.createQuery(AkUsers.class);
        Root<AkUsers> person = criteria.from(AkUsers.class);

        criteria.select(person).orderBy(cb.asc(person.get("user_first_name")));

        return em.createQuery(criteria).getResultList();

    }
}
