import com.mongodb.client.*;
import org.bson.Document;

import java.util.function.Consumer;

public class MongoConnector {
    private String username = System.getenv("DEVOPSMONGOUSER");
    private String password = System.getenv("DEVOPSMONGOPASS");
    private String dbName = "test";

    public MongoDatabase getDb() {
        String connectString = "mongodb+srv://" + username + ":" + password + "@cluster0-tlr8k.mongodb.net/test?retryWrites=true&w=majority";
        MongoClient mongoClient = MongoClients.create(connectString);
        return mongoClient.getDatabase(dbName);
    }

    public static void main(String[] args) {
        MongoDatabase test = new MongoConnector().getDb();
        System.out.println("Connected to " + test.getName());

        Document doc = new Document("name","Brian");
        MongoCollection<Document> brugere = test.getCollection("brugere");
        brugere.insertOne(doc);
        brugere.find().forEach((Consumer<Document>) System.out::println);
// Lambda expression - same as:
   /*   try (MongoCursor<Document> cursor = brugere.find().iterator()) {
            while (cursor.hasNext()) {
                System.out.println(cursor.next());
            }
        } */
    }

}
