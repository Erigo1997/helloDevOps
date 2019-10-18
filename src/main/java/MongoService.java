import org.bson.Document;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("mongo")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class MongoService {
    @POST
    @Path("{collection}")
    public void postRandomObjects(@PathParam("collection") String collection, Document mongoDoc) {
        System.out.println("Pathname: "+ collection + ", object: " + mongoDoc);
    }

}