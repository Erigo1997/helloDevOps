import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("giraffes")
public class GiraffeService {
    List<String> giraffes;

    public GiraffeService() {
        giraffes = new ArrayList<String>();
        giraffes.add("Melman");
        giraffes.add("Marius");
    }

    @GET
    public List<String> getGiraffes(){
        System.out.println("Nu henter vi giraffer.");
        System.out.println(giraffes);
        return giraffes;
    }

    @POST
    public void postGiraffe(GirafData giraf) {
        System.out.println("Byd velkommen til giraffen " + giraf.getName());
        giraffes.add(giraf.getName());
        System.out.println(giraffes);
    }
}
