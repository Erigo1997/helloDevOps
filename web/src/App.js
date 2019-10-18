import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Link, Switch, withRouter} from "react-router-dom";
import Button from "react-bootstrap/Button";
import GiraffeStore from "./stores/GiraffeStore";
import {observer} from "mobx-react";

const  giraffeStore = new GiraffeStore();

function App() {
    return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                        <li>
                            <Link to="/users/">Users</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path={"/about/:text"} component={About}/>
                    <Route path={"/users/"} component={Users}/>
                    <Route exact path={"/"} render={()=><h1>Startside</h1>}/>
                    <Route render={()=><h1>404</h1>}/>
                </Switch>
            </div>
    );
}

const Users = observer(()=> {
    return <div>
        <h2> {giraffeStore.state} </h2>
        <ul>
            {giraffeStore.giraffes.map((giraffeName,key)=>
                <li key={key}>{giraffeName}</li>
            )}
        </ul>

        <Button variant="warning" onClick={()=>giraffeStore.pushGiraffe("Elliot")}>Tilføj giraf</Button>
        </div>
})

const About = withRouter(({history, match})=> {
    console.log(history);
    console.log(match);
    return <div>
        <h1> About {match.params.text}</h1>
        <Button variant="primary" onClick={()=>history.push("/")}>Push History</Button>
    </div>
});

export default observer(App);
