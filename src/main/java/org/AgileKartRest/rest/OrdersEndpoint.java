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
import org.AgileKartRest.model.Orders;

/**
 * 
 */
@Stateless
@Path("/orders")
public class OrdersEndpoint
{
   @PersistenceContext(unitName = "AgileKartRest-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(Orders entity)
   {
      em.persist(entity);
      return Response.created(UriBuilder.fromResource(OrdersEndpoint.class).path(String.valueOf(entity.getOrderId())).build()).build();
   }

   @DELETE
   @Path("/{id}")
   public Response deleteById(@PathParam("id") String id)
   {
      Orders entity = em.find(Orders.class, id);
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
      TypedQuery<Orders> findByIdQuery = em.createQuery("SELECT DISTINCT o FROM Orders o LEFT JOIN FETCH o.paymentGateway LEFT JOIN FETCH o.users LEFT JOIN FETCH o.orderStatuses LEFT JOIN FETCH o.orderDetailses LEFT JOIN FETCH o.userRewardses WHERE o.orderId = :entityId ORDER BY o.orderId", Orders.class);
      findByIdQuery.setParameter("entityId", id);
      Orders entity;
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
   public List<Orders> listAll(@QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
      TypedQuery<Orders> findAllQuery = em.createQuery("SELECT DISTINCT o FROM Orders o LEFT JOIN FETCH o.paymentGateway LEFT JOIN FETCH o.users LEFT JOIN FETCH o.orderStatuses LEFT JOIN FETCH o.orderDetailses LEFT JOIN FETCH o.userRewardses ORDER BY o.orderId", Orders.class);
      if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      final List<Orders> results = findAllQuery.getResultList();
      return results;
   }

   @PUT
   @Path("/{id}")
   @Consumes("application/json")
   public Response update(@PathParam("id") String id, Orders entity)
   {
      if (entity == null)
      {
         return Response.status(Status.BAD_REQUEST).build();
      }
      if (!id.equals(entity.getOrderId()))
      {
         return Response.status(Status.CONFLICT).entity(entity).build();
      }
      if (em.find(Orders.class, id) == null)
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