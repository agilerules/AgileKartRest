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
import org.AgileKartRest.model.PaymentGateway;

/**
 * 
 */
@Stateless
@Path("/paymentgateways")
public class PaymentGatewayEndpoint
{
   @PersistenceContext(unitName = "AgileKartRest-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(PaymentGateway entity)
   {
      em.persist(entity);
      return Response.created(UriBuilder.fromResource(PaymentGatewayEndpoint.class).path(String.valueOf(entity.getPaymentGatewayId())).build()).build();
   }

   @DELETE
   @Path("/{id}")
   public Response deleteById(@PathParam("id") String id)
   {
      PaymentGateway entity = em.find(PaymentGateway.class, id);
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
      TypedQuery<PaymentGateway> findByIdQuery = em.createQuery("SELECT DISTINCT p FROM PaymentGateway p LEFT JOIN FETCH p.merchantPaymentGateways LEFT JOIN FETCH p.orderses WHERE p.paymentGatewayId = :entityId ORDER BY p.paymentGatewayId", PaymentGateway.class);
      findByIdQuery.setParameter("entityId", id);
      PaymentGateway entity;
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
   public List<PaymentGateway> listAll(@QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
      TypedQuery<PaymentGateway> findAllQuery = em.createQuery("SELECT DISTINCT p FROM PaymentGateway p LEFT JOIN FETCH p.merchantPaymentGateways LEFT JOIN FETCH p.orderses ORDER BY p.paymentGatewayId", PaymentGateway.class);
      if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      final List<PaymentGateway> results = findAllQuery.getResultList();
      return results;
   }

   @PUT
   @Path("/{id}")
   @Consumes("application/json")
   public Response update(@PathParam("id") String id, PaymentGateway entity)
   {
      if (entity == null)
      {
         return Response.status(Status.BAD_REQUEST).build();
      }
      if (!id.equals(entity.getPaymentGatewayId()))
      {
         return Response.status(Status.CONFLICT).entity(entity).build();
      }
      if (em.find(PaymentGateway.class, id) == null)
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
