package org.AgileKartRest.security.service;

import org.AgileKartRest.entity.AkUsers;
import org.AgileKartRest.security.model.ApplicationRole;
import org.AgileKartRest.security.model.IdentityModelManager;
import org.AgileKartRest.security.model.MyUser;
import org.AgileKartRest.util.MessageBuilder;
import org.picketlink.authorization.annotations.RolesAllowed;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Stateless
@Path("/private/account")
@RolesAllowed(ApplicationRole.ADMINISTRATOR)
public class AccountService {

    @Inject
    private IdentityModelManager identityModelManager;
    
    @POST
    @Path("enableAccount")
    @Produces(MediaType.APPLICATION_JSON)
    public Response enable(AkUsers passedUser) {
        MessageBuilder message;

        MyUser user = this.identityModelManager.findByLoginName(passedUser.getUserEmail());

        if (user == null) {
            return MessageBuilder.badRequest().message("Invalid account.").build();
        }

        if(user.isEnabled()) {
            return MessageBuilder.badRequest().message("Account is already enabled.").build();
        }

        this.identityModelManager.enableAccount(user);

        return MessageBuilder.ok().message("Account is now enabled.").build();
    }

    @POST
    @Path("disableAccount")
    @Produces(MediaType.APPLICATION_JSON)
    public Response disable(AkUsers passedUser) {
        MessageBuilder message;

        MyUser user = this.identityModelManager.findByLoginName(passedUser.getUserEmail());

        if (user == null) {
            return MessageBuilder.badRequest().message("Invalid account.").build();
        }

        if(!user.isEnabled()) {
            return MessageBuilder.badRequest().message("Accound is already disabled.").build();
        }

        this.identityModelManager.disableAccount(user);

        return MessageBuilder.ok().message("Account is now disabled.").build();
    }
}
