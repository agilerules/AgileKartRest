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
import org.AgileKartRest.model.AkOrders;

/**
 * 
 */
@Stateless
@Path("/akorders")
public class AkOrdersEndpoint
{
   @PersistenceContext(unitName = "AgileKartRest-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(AkOrders entity)
   {
      em.persist(entity);
      return Response.created(UriBuilder.fromResource(AkOrdersEndpoint.class).path(String.valueOf(entity.getOrderId())).build()).build();
   }

   @DELETE
   @Path("/{id:[0-9][0-9]*}")
   public Response deleteById(@PathParam("id") Integer id)
   {
      AkOrders entity = em.find(AkOrders.class, id);
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
   public Response findById(@PathParam("id") Integer id)
   {
      TypedQuery<AkOrders> findByIdQuery = em.createQuery("SELECT DISTINCT a FROM AkOrders a LEFT JOIN FETCH a.akUsers LEFT JOIN FETCH a.akOrderDetailses WHERE a.orderId = :entityId ORDER BY a.orderId", AkOrders.class);
      findByIdQuery.setParameter("entityId", id);
      AkOrders entity;
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
   public List<AkOrders> listAll(@QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
      TypedQuery<AkOrders> findAllQuery = em.createQuery("SELECT DISTINCT a FROM AkOrders a LEFT JOIN FETCH a.akUsers LEFT JOIN FETCH a.akOrderDetailses ORDER BY a.orderId", AkOrders.class);
      if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      final List<AkOrders> results = findAllQuery.getResultList();
      return results;
   }

   @PUT
   @Path("/{id:[0-9][0-9]*}")
   @Consumes("application/json")
   public Response update(@PathParam("id") Integer id, AkOrders entity)
   {
      if (entity == null)
      {
         return Response.status(Status.BAD_REQUEST).build();
      }
      if (!id.equals(entity.getOrderId()))
      {
         return Response.status(Status.CONFLICT).entity(entity).build();
      }
      if (em.find(AkOrders.class, id) == null)
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
   @GET
   @Path("{id:[0-9][0-9]*}/{status}")
   @Produces("application/json")
   public Response updateStatus(@PathParam("id") Integer id,@PathParam("status") String status)
   {
      TypedQuery<AkOrders> findOrderQuery = em.createQuery("SELECT DISTINCT a FROM AkOrders a LEFT JOIN FETCH a.akUsers LEFT JOIN FETCH a.akOrderDetailses WHERE a.orderId = :entityId ORDER BY a.orderId", AkOrders.class);
      findOrderQuery.setParameter("entityId", id);
      AkOrders entity;
      try
      {
         entity = findOrderQuery.getSingleResult();
         entity.setOrderStatus(status);
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

}
