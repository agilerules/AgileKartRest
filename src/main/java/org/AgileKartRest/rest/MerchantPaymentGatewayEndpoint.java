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
import org.AgileKartRest.model.MerchantPaymentGateway;

/**
 * 
 */
@Stateless
@Path("/merchantpaymentgateways")
public class MerchantPaymentGatewayEndpoint
{
   @PersistenceContext(unitName = "AgileKartRest-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(MerchantPaymentGateway entity)
   {
      em.persist(entity);
      return Response.created(UriBuilder.fromResource(MerchantPaymentGatewayEndpoint.class).path(String.valueOf(entity.getMerchantPaymentGatewayId())).build()).build();
   }

   @DELETE
   @Path("/{id}")
   public Response deleteById(@PathParam("id") String id)
   {
      MerchantPaymentGateway entity = em.find(MerchantPaymentGateway.class, id);
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
      TypedQuery<MerchantPaymentGateway> findByIdQuery = em.createQuery("SELECT DISTINCT m FROM MerchantPaymentGateway m LEFT JOIN FETCH m.merchant LEFT JOIN FETCH m.paymentGateway WHERE m.merchantPaymentGatewayId = :entityId ORDER BY m.merchantPaymentGatewayId", MerchantPaymentGateway.class);
      findByIdQuery.setParameter("entityId", id);
      MerchantPaymentGateway entity;
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
   public List<MerchantPaymentGateway> listAll(@QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
      TypedQuery<MerchantPaymentGateway> findAllQuery = em.createQuery("SELECT DISTINCT m FROM MerchantPaymentGateway m LEFT JOIN FETCH m.merchant LEFT JOIN FETCH m.paymentGateway ORDER BY m.merchantPaymentGatewayId", MerchantPaymentGateway.class);
      if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      final List<MerchantPaymentGateway> results = findAllQuery.getResultList();
      return results;
   }

   @PUT
   @Path("/{id}")
   @Consumes("application/json")
   public Response update(@PathParam("id") String id, MerchantPaymentGateway entity)
   {
      if (entity == null)
      {
         return Response.status(Status.BAD_REQUEST).build();
      }
      if (!id.equals(entity.getMerchantPaymentGatewayId()))
      {
         return Response.status(Status.CONFLICT).entity(entity).build();
      }
      if (em.find(MerchantPaymentGateway.class, id) == null)
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