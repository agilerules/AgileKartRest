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

import org.AgileKartRest.entity.AkOrderDetails;
import org.AgileKartRest.entity.AkUsers;

/**
 * 
 */
@Stateless
@Path("/akorderdetails")
public class AkOrderDetailsEndpoint
{
   @PersistenceContext(unitName = "AgileKartRest-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(AkOrderDetails entity)
   {
      em.persist(entity);
      return Response.created(UriBuilder.fromResource(AkOrderDetailsEndpoint.class).path(String.valueOf(entity.getDetailId())).build()).build();
   }

   @DELETE
   @Path("/{id:[0-9][0-9]*}")
   public Response deleteById(@PathParam("id") Integer id)
   {
      AkOrderDetails entity = em.find(AkOrderDetails.class, id);
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
      TypedQuery<AkOrderDetails> findByIdQuery = em.createQuery("SELECT DISTINCT a FROM AkOrderDetails a LEFT JOIN FETCH a.akOrders LEFT JOIN FETCH a.akProducts WHERE a.detailId = :entityId ORDER BY a.detailId", AkOrderDetails.class);
      findByIdQuery.setParameter("entityId", id);
      AkOrderDetails entity;
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
   public List<AkOrderDetails> listAll(@QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
      TypedQuery<AkOrderDetails> findAllQuery = em.createQuery("SELECT DISTINCT a FROM AkOrderDetails a LEFT JOIN FETCH a.akOrders LEFT JOIN FETCH a.akProducts ORDER BY a.detailId", AkOrderDetails.class);
      if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      final List<AkOrderDetails> results = findAllQuery.getResultList();
      return results;
   }
   
   @GET
   @Path("/order/{id:[0-9][0-9]*}")
   @Produces("application/json")
   public List<AkOrderDetails> findbyOrderId(@PathParam("id") Integer id)
   {
	   TypedQuery<AkOrderDetails> findByIdQuery = em.createQuery("SELECT DISTINCT a FROM AkOrderDetails a LEFT JOIN FETCH a.akOrders LEFT JOIN FETCH a.akProducts where a.akOrders.orderId = :entityId ORDER BY a.detailId", AkOrderDetails.class);
      findByIdQuery.setParameter("entityId", id);
      final List<AkOrderDetails> results = findByIdQuery.getResultList();
      return results;
   }
    
   @PUT
   @Path("/{id:[0-9][0-9]*}")
   @Consumes("application/json")
   public Response update(@PathParam("id") Integer id, AkOrderDetails entity)
   {
      if (entity == null)
      {
         return Response.status(Status.BAD_REQUEST).build();
      }
      if (!id.equals(entity.getDetailId()))
      {
         return Response.status(Status.CONFLICT).entity(entity).build();
      }
      if (em.find(AkOrderDetails.class, id) == null)
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
