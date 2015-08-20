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
import org.AgileKartRest.model.ProductCategory;

/**
 * 
 */
@Stateless
@Path("/productcategories")
public class ProductCategoryEndpoint
{
   @PersistenceContext(unitName = "AgileKartRest-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(ProductCategory entity)
   {
      em.persist(entity);
      return Response.created(UriBuilder.fromResource(ProductCategoryEndpoint.class).path(String.valueOf(entity.getProductCategoryId())).build()).build();
   }

   @DELETE
   @Path("/{id}")
   public Response deleteById(@PathParam("id") String id)
   {
      ProductCategory entity = em.find(ProductCategory.class, id);
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
      TypedQuery<ProductCategory> findByIdQuery = em.createQuery("SELECT DISTINCT p FROM ProductCategory p LEFT JOIN FETCH p.category LEFT JOIN FETCH p.product WHERE p.productCategoryId = :entityId ORDER BY p.productCategoryId", ProductCategory.class);
      findByIdQuery.setParameter("entityId", id);
      ProductCategory entity;
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
   public List<ProductCategory> listAll(@QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
      TypedQuery<ProductCategory> findAllQuery = em.createQuery("SELECT DISTINCT p FROM ProductCategory p LEFT JOIN FETCH p.category LEFT JOIN FETCH p.product ORDER BY p.productCategoryId", ProductCategory.class);
      if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      final List<ProductCategory> results = findAllQuery.getResultList();
      return results;
   }

   @PUT
   @Path("/{id}")
   @Consumes("application/json")
   public Response update(@PathParam("id") String id, ProductCategory entity)
   {
      if (entity == null)
      {
         return Response.status(Status.BAD_REQUEST).build();
      }
      if (!id.equals(entity.getProductCategoryId()))
      {
         return Response.status(Status.CONFLICT).entity(entity).build();
      }
      if (em.find(ProductCategory.class, id) == null)
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