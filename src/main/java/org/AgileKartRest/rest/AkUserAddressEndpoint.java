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
import org.AgileKartRest.entity.AkUserAddress;

/**
 * 
 */
@Stateless
@Path("/akuseraddresses")
public class AkUserAddressEndpoint
{
   @PersistenceContext(unitName = "AgileKartRest-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(AkUserAddress entity)
   {
      em.persist(entity);
      return Response.created(UriBuilder.fromResource(AkUserAddressEndpoint.class).path(String.valueOf(entity.getAddressId())).build()).build();
   }

   @DELETE
   @Path("/{id:[0-9][0-9]*}")
   public Response deleteById(@PathParam("id") Integer id)
   {
      AkUserAddress entity = em.find(AkUserAddress.class, id);
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
      TypedQuery<AkUserAddress> findByIdQuery = em.createQuery("SELECT DISTINCT a FROM AkUserAddress a LEFT JOIN FETCH a.akUsers WHERE a.addressId = :entityId ORDER BY a.addressId", AkUserAddress.class);
      findByIdQuery.setParameter("entityId", id);
      AkUserAddress entity;
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
   @Path("/{id:[0-9][0-9]*}")
   @Produces("application/json")
   public List<AkUserAddress> listAll(@PathParam("id") Integer id,@QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
      TypedQuery<AkUserAddress> findAllQuery = em.createQuery("SELECT DISTINCT a FROM AkUserAddress a LEFT JOIN FETCH a.akUsers where a.akUsers.userId= :entityId ORDER BY a.addressId", AkUserAddress.class);
      findAllQuery.setParameter("entityId", id);
      if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      final List<AkUserAddress> results = findAllQuery.getResultList();
      return results;
   }

   @PUT
   @Path("/{id:[0-9][0-9]*}")
   @Consumes("application/json")
   public Response update(@PathParam("id") Integer id, AkUserAddress entity)
   {
      if (entity == null)
      {
         return Response.status(Status.BAD_REQUEST).build();
      }
      if (!id.equals(entity.getAddressId()))
      {
         return Response.status(Status.CONFLICT).entity(entity).build();
      }
      if (em.find(AkUserAddress.class, id) == null)
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
