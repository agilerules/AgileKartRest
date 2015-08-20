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
import org.AgileKartRest.model.Merchant;

/**
 * 
 */
@Stateless
@Path("/merchants")
public class MerchantEndpoint
{
   @PersistenceContext(unitName = "AgileKartRest-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(Merchant entity)
   {
      em.persist(entity);
      return Response.created(UriBuilder.fromResource(MerchantEndpoint.class).path(String.valueOf(entity.getMerchantId())).build()).build();
   }

   @DELETE
   @Path("/{id}")
   public Response deleteById(@PathParam("id") String id)
   {
      Merchant entity = em.find(Merchant.class, id);
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
      TypedQuery<Merchant> findByIdQuery = em.createQuery("SELECT DISTINCT m FROM Merchant m LEFT JOIN FETCH m.merchantFeatureses LEFT JOIN FETCH m.offers LEFT JOIN FETCH m.merchantReviews LEFT JOIN FETCH m.merchantCategories LEFT JOIN FETCH m.merchantAddresses LEFT JOIN FETCH m.merchantPaymentGateways LEFT JOIN FETCH m.loyaltyProgramMerchants LEFT JOIN FETCH m.taxRuleMerchants LEFT JOIN FETCH m.userFavouriteses LEFT JOIN FETCH m.products WHERE m.merchantId = :entityId ORDER BY m.merchantId", Merchant.class);
      findByIdQuery.setParameter("entityId", id);
      Merchant entity;
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
   public List<Merchant> listAll(@QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
      TypedQuery<Merchant> findAllQuery = em.createQuery("SELECT DISTINCT m FROM Merchant m LEFT JOIN FETCH m.merchantFeatureses LEFT JOIN FETCH m.offers LEFT JOIN FETCH m.merchantReviews LEFT JOIN FETCH m.merchantCategories LEFT JOIN FETCH m.merchantAddresses LEFT JOIN FETCH m.merchantPaymentGateways LEFT JOIN FETCH m.loyaltyProgramMerchants LEFT JOIN FETCH m.taxRuleMerchants LEFT JOIN FETCH m.userFavouriteses LEFT JOIN FETCH m.products ORDER BY m.merchantId", Merchant.class);
      if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      final List<Merchant> results = findAllQuery.getResultList();
      return results;
   }

   @PUT
   @Path("/{id}")
   @Consumes("application/json")
   public Response update(@PathParam("id") String id, Merchant entity)
   {
      if (entity == null)
      {
         return Response.status(Status.BAD_REQUEST).build();
      }
      if (!id.equals(entity.getMerchantId()))
      {
         return Response.status(Status.CONFLICT).entity(entity).build();
      }
      if (em.find(Merchant.class, id) == null)
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
