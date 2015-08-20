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
import org.AgileKartRest.model.LoyaltyProgramTier;

/**
 * 
 */
@Stateless
@Path("/loyaltyprogramtiers")
public class LoyaltyProgramTierEndpoint
{
   @PersistenceContext(unitName = "AgileKartRest-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(LoyaltyProgramTier entity)
   {
      em.persist(entity);
      return Response.created(UriBuilder.fromResource(LoyaltyProgramTierEndpoint.class).path(String.valueOf(entity.getTierId())).build()).build();
   }

   @DELETE
   @Path("/{id}")
   public Response deleteById(@PathParam("id") String id)
   {
      LoyaltyProgramTier entity = em.find(LoyaltyProgramTier.class, id);
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
      TypedQuery<LoyaltyProgramTier> findByIdQuery = em.createQuery("SELECT DISTINCT l FROM LoyaltyProgramTier l LEFT JOIN FETCH l.userRewardses LEFT JOIN FETCH l.loyaltyEventDetailses WHERE l.tierId = :entityId ORDER BY l.tierId", LoyaltyProgramTier.class);
      findByIdQuery.setParameter("entityId", id);
      LoyaltyProgramTier entity;
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
   public List<LoyaltyProgramTier> listAll(@QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
      TypedQuery<LoyaltyProgramTier> findAllQuery = em.createQuery("SELECT DISTINCT l FROM LoyaltyProgramTier l LEFT JOIN FETCH l.userRewardses LEFT JOIN FETCH l.loyaltyEventDetailses ORDER BY l.tierId", LoyaltyProgramTier.class);
      if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      final List<LoyaltyProgramTier> results = findAllQuery.getResultList();
      return results;
   }

   @PUT
   @Path("/{id}")
   @Consumes("application/json")
   public Response update(@PathParam("id") String id, LoyaltyProgramTier entity)
   {
      if (entity == null)
      {
         return Response.status(Status.BAD_REQUEST).build();
      }
      if (!id.equals(entity.getTierId()))
      {
         return Response.status(Status.CONFLICT).entity(entity).build();
      }
      if (em.find(LoyaltyProgramTier.class, id) == null)
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
