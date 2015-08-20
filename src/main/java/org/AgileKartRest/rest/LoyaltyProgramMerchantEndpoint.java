package org.AgileKartRest.rest;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.OptimisticLockException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriBuilder;
import org.AgileKartRest.model.LoyaltyProgramMerchant;

/**
 * 
 */
@Stateless
@Path("/loyaltyprogrammerchants")
public class LoyaltyProgramMerchantEndpoint
{
   @PersistenceContext(unitName = "AgileKartRest-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(LoyaltyProgramMerchant entity)
   {
      em.persist(entity);
      return Response.created(UriBuilder.fromResource(LoyaltyProgramMerchantEndpoint.class).path(String.valueOf(entity.getLoyaltyProgramMerchantId())).build()).build();
   }

   @DELETE
   @Path("/{id}")
   public Response deleteById(@PathParam("id") String id)
   {
      LoyaltyProgramMerchant entity = em.find(LoyaltyProgramMerchant.class, id);
      if (entity == null)
      {
         return Response.status(Status.NOT_FOUND).build();
      }
      em.remove(entity);
      return Response.noContent().build();
   }

   @GET
   @Path("/{id}")
   @Produces("application/json")
   public Response findById(@PathParam("id") String id)
   {
      TypedQuery<LoyaltyProgramMerchant> findByIdQuery = em.createQuery("SELECT DISTINCT l FROM LoyaltyProgramMerchant l LEFT JOIN FETCH l.merchant WHERE l.loyaltyProgramMerchantId = :entityId ORDER BY l.loyaltyProgramMerchantId", LoyaltyProgramMerchant.class);
      findByIdQuery.setParameter("entityId", id);
      LoyaltyProgramMerchant entity;
      try
      {
         entity = findByIdQuery.getSingleResult();
      }
      catch (NoResultException nre)
      {
         entity = null;
      }
      if (entity == null)
      {
         return Response.status(Status.NOT_FOUND).build();
      }
      return Response.ok(entity).build();
   }

   @GET
   @Produces("application/json")
   public List<LoyaltyProgramMerchant> listAll(@QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
      TypedQuery<LoyaltyProgramMerchant> findAllQuery = em.createQuery("SELECT DISTINCT l FROM LoyaltyProgramMerchant l LEFT JOIN FETCH l.merchant ORDER BY l.loyaltyProgramMerchantId", LoyaltyProgramMerchant.class);
      if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      final List<LoyaltyProgramMerchant> results = findAllQuery.getResultList();
      return results;
   }

   @PUT
   @Path("/{id}")
   @Consumes("application/json")
   public Response update(@PathParam("id") String id, LoyaltyProgramMerchant entity)
   {
      if (entity == null)
      {
         return Response.status(Status.BAD_REQUEST).build();
      }
      if (!id.equals(entity.getLoyaltyProgramMerchantId()))
      {
         return Response.status(Status.CONFLICT).entity(entity).build();
      }
      if (em.find(LoyaltyProgramMerchant.class, id) == null)
      {
         return Response.status(Status.NOT_FOUND).build();
      }
      try
      {
         entity = em.merge(entity);
      }
      catch (OptimisticLockException e)
      {
         return Response.status(Response.Status.CONFLICT).entity(e.getEntity()).build();
      }

      return Response.noContent().build();
   }
}