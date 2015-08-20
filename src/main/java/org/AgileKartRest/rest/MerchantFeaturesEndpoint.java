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
import org.AgileKartRest.model.MerchantFeatures;

/**
 * 
 */
@Stateless
@Path("/merchantfeatures")
public class MerchantFeaturesEndpoint
{
   @PersistenceContext(unitName = "AgileKartRest-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(MerchantFeatures entity)
   {
      em.persist(entity);
      return Response.created(UriBuilder.fromResource(MerchantFeaturesEndpoint.class).path(String.valueOf(entity.getMerchantFeaturesId())).build()).build();
   }

   @DELETE
   @Path("/{id}")
   public Response deleteById(@PathParam("id") String id)
   {
      MerchantFeatures entity = em.find(MerchantFeatures.class, id);
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
      TypedQuery<MerchantFeatures> findByIdQuery = em.createQuery("SELECT DISTINCT m FROM MerchantFeatures m LEFT JOIN FETCH m.featureOptions LEFT JOIN FETCH m.features LEFT JOIN FETCH m.merchant WHERE m.merchantFeaturesId = :entityId ORDER BY m.merchantFeaturesId", MerchantFeatures.class);
      findByIdQuery.setParameter("entityId", id);
      MerchantFeatures entity;
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
   public List<MerchantFeatures> listAll(@QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
      TypedQuery<MerchantFeatures> findAllQuery = em.createQuery("SELECT DISTINCT m FROM MerchantFeatures m LEFT JOIN FETCH m.featureOptions LEFT JOIN FETCH m.features LEFT JOIN FETCH m.merchant ORDER BY m.merchantFeaturesId", MerchantFeatures.class);
      if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      final List<MerchantFeatures> results = findAllQuery.getResultList();
      return results;
   }

   @PUT
   @Path("/{id}")
   @Consumes("application/json")
   public Response update(@PathParam("id") String id, MerchantFeatures entity)
   {
      if (entity == null)
      {
         return Response.status(Status.BAD_REQUEST).build();
      }
      if (!id.equals(entity.getMerchantFeaturesId()))
      {
         return Response.status(Status.CONFLICT).entity(entity).build();
      }
      if (em.find(MerchantFeatures.class, id) == null)
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