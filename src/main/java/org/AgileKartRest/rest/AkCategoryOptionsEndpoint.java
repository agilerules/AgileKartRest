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
import org.AgileKartRest.model.AkCategoryOptions;

/**
 * 
 */
@Stateless
@Path("/akcategoryoptions")
public class AkCategoryOptionsEndpoint
{
   @PersistenceContext(unitName = "AgileKartRest-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(AkCategoryOptions entity)
   {
      em.persist(entity);
      return Response.created(UriBuilder.fromResource(AkCategoryOptionsEndpoint.class).path(String.valueOf(entity.getCategoryOptionId())).build()).build();
   }

   @DELETE
   @Path("/{id:[0-9][0-9]*}")
   public Response deleteById(@PathParam("id") Integer id)
   {
      AkCategoryOptions entity = em.find(AkCategoryOptions.class, id);
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
      TypedQuery<AkCategoryOptions> findByIdQuery = em.createQuery("SELECT DISTINCT a FROM AkCategoryOptions a LEFT JOIN FETCH a.akOptionGroups LEFT JOIN FETCH a.akProductCategories WHERE a.categoryOptionId = :entityId ORDER BY a.categoryOptionId", AkCategoryOptions.class);
      findByIdQuery.setParameter("entityId", id);
      AkCategoryOptions entity;
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
   public List<AkCategoryOptions> listAll(@QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
      TypedQuery<AkCategoryOptions> findAllQuery = em.createQuery("SELECT DISTINCT a FROM AkCategoryOptions a LEFT JOIN FETCH a.akOptionGroups LEFT JOIN FETCH a.akProductCategories ORDER BY a.categoryOptionId", AkCategoryOptions.class);
      if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      final List<AkCategoryOptions> results = findAllQuery.getResultList();
      return results;
   }
   
      @PUT
   @Path("/{id:[0-9][0-9]*}")
   @Consumes("application/json")
   public Response update(AkCategoryOptions entity)
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
