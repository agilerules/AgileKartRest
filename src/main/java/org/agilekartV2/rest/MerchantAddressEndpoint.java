package org.agilekartV2.rest;

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
import org.agilekartV2.model.MerchantAddress;

/**
 * 
 */
@Stateless
@Path("/merchantaddresses")
public class MerchantAddressEndpoint
{
   @PersistenceContext(unitName = "agilekartV2-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(MerchantAddress entity)
   {
      em.persist(entity);
      return Response.created(UriBuilder.fromResource(MerchantAddressEndpoint.class).path(String.valueOf(entity.getMerchantAddressId())).build()).build();
   }

   @DELETE
   @Path("/{id:[0-9][0-9]*}")
   public Response deleteById(@PathParam("id") String id)
   {
      MerchantAddress entity = em.find(MerchantAddress.class, id);
      if (entity == null)
      {
         return Response.status(Status.NOT_FOUND).build();
      }
      em.remove(entity);
      return Response.noContent().build();
   }

   @GET
   @Path("/{id:[0-9][0-9]*}")
   @Produces("application/json")
   public Response findById(@PathParam("id") String id)
   {
      TypedQuery<MerchantAddress> findByIdQuery = em.createQuery("SELECT DISTINCT m FROM MerchantAddress m WHERE m.merchantAddressId = :entityId ORDER BY m.merchantAddressId", MerchantAddress.class);
      findByIdQuery.setParameter("entityId", id);
      MerchantAddress entity;
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
   public List<MerchantAddress> listAll(@QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
      TypedQuery<MerchantAddress> findAllQuery = em.createQuery("SELECT DISTINCT m FROM MerchantAddress m ORDER BY m.merchantAddressId", MerchantAddress.class);
      if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      final List<MerchantAddress> results = findAllQuery.getResultList();
      return results;
   }

   @PUT
   @Path("/{id:[0-9][0-9]*}")
   @Consumes("application/json")
   public Response update(MerchantAddress entity)
   {
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
