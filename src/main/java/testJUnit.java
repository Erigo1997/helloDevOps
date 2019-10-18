import org.junit.Assert;
import org.junit.Test;

import java.util.Arrays;
import java.util.List;

public class testJUnit {

    GiraffeService g = new GiraffeService();

    @Test
    public void getGiraffes() {
        List<String> strings = Arrays.asList("Melman", "Elmer");
        Assert.assertEquals(strings, g.getGiraffes());
    }
}
