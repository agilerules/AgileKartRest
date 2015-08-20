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
import org.AgileKartRest.model.Product;

/**
 * 
 */
@Stateless
@Path("/products")
public class ProductEndpoint
{
   @PersistenceContext(unitName = "AgileKartRest-persistence-unit")
   private EntityManager em;

   @POST
   @Consumes("application/json")
   public Response create(Product entity)
   {
      em.persist(entity);
      return Response.created(UriBuilder.fromResource(ProductEndpoint.class).path(String.valueOf(entity.getProductId())).build()).build();
   }

   @DELETE
   @Path("/{id}")
   public Response deleteById(@PathParam("id") String id)
   {
      Product entity = em.find(Product.class, id);
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
      TypedQuery<Product> findByIdQuery = em.createQuery("SELECT DISTINCT p FROM Product p LEFT JOIN FETCH p.merchant LEFT JOIN FETCH p.productOptions LEFT JOIN FETCH p.productReviews LEFT JOIN FETCH p.productCategories LEFT JOIN FETCH p.orderDetailses LEFT JOIN FETCH p.offers WHERE p.productId = :entityId ORDER BY p.productId", Product.class);
      findByIdQuery.setParameter("entityId", id);
      Product entity;
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
   public List<Product> listAll(@QueryParam("start") Integer startPosition, @QueryParam("max") Integer maxResult)
   {
      TypedQuery<Product> findAllQuery = em.createQuery("SELECT DISTINCT p FROM Product p LEFT JOIN FETCH p.merchant LEFT JOIN FETCH p.productOptions LEFT JOIN FETCH p.productReviews LEFT JOIN FETCH p.productCategories LEFT JOIN FETCH p.orderDetailses LEFT JOIN FETCH p.offers ORDER BY p.productId", Product.class);
      if (startPosition != null)
      {
         findAllQuery.setFirstResult(startPosition);
      }
      if (maxResult != null)
      {
         findAllQuery.setMaxResults(maxResult);
      }
      final List<Product> results = findAllQuery.getResultList();
      return results;
   }

   @PUT
   @Path("/{id}")
   @Consumes("application/json")
   public Response update(@PathParam("id") String id, Product entity)
   {
      if (entity == null)
      {
         return Response.status(Status.BAD_REQUEST).build();
      }
      if (!id.equals(entity.getProductId()))
      {
         return Response.status(Status.CONFLICT).entity(entity).build();
      }
      if (em.find(Product.class, id) == null)
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
