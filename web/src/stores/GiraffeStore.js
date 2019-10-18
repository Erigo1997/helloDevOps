import {decorate, observable} from "mobx";

const baseUrl = process.env.NODE_ENV === 'development' ?
    "http://localhost:8080/":""; // Checking if dev environment


export default class GiraffeStore {
    giraffes = ["Loading Giraffes"];
    state = "LOAD";

    constructor(props) {
        this.fetchGiraffes();
    }

    pushGiraffe(name) {
        this.state = "LOAD";
        console.log("Sending giraffe:");
        console.log(name);
        console.log(baseUrl + "rest/giraffes");
        fetch(baseUrl + "rest/giraffes", {
            method:'POST',
            body:JSON.stringify({name:name})});
        this.state = "DONE";
    }

    fetchGiraffes() {
        this.state = "LOAD";
        console.log("Fetch some giraffes.");
        fetch(baseUrl + "rest/giraffes", {method:"GET"}).then(
            (response)=> response.json().then(
                (json)=> {
                    this.state = "DONE";
                    console.log(this.giraffes);
                    this.giraffes=json}
            )
        );
        console.log(this.giraffes);
    }
}

decorate(GiraffeStore, {
    giraffes : observable,
    state : observable
})