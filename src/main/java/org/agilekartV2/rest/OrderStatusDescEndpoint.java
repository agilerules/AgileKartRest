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
import org.agilekartV2.model.OrderStatusDesc;

/**
 * 
 */
@Stateless
@Path("/orderstatusdescs")
public class OrderStatusDescEndpoint
{
   @PersistenceContext(unitName = "agilekartV2-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(OrderStatusDesc entity)
   {
      em.persist(entity);
      return Response.created(UriBuilder.fromResource(OrderStatusDescEndpoint.class).path(String.valueOf(entity.getOrderStatusDescId())).build()).build();
   }

   @DELETE
   @Path("/{id:[0-9][0-9]*}")
   public Response deleteById(@PathParam("id") String id)
   {
      OrderStatusDesc entity = em.find(OrderStatusDesc.class, id);
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
      TypedQuery<OrderStatusDesc> findByIdQuery = em.createQuery("SELECT DISTINCT o FROM OrderStatusDesc o WHERE o.orderStatusDescId = :entityId ORDER BY o.orderStatusDescId", OrderStatusDesc.class);
      findByIdQuery.setParameter("entityId", id);
      OrderStatusDesc entity;
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
   public List<OrderStatusDesc> listAll(@QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
      TypedQuery<OrderStatusDesc> findAllQuery = em.createQuery("SELECT DISTINCT o FROM OrderStatusDesc o ORDER BY o.orderStatusDescId", OrderStatusDesc.class);
      if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      final List<OrderStatusDesc> results = findAllQuery.getResultList();
      return results;
   }

   @PUT
   @Path("/{id:[0-9][0-9]*}")
   @Consumes("application/json")
   public Response update(OrderStatusDesc entity)
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
