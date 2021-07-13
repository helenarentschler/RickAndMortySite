import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Home from "./pages/home";
import Character from "./pages/character";

export default class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <Link to={"/character"}>character</Link>
                    </Route>
                    <Route path="/character">
                        <Link to={"/"}>home</Link>
                        <Character />
                    </Route>
                </Switch>
            </BrowserRouter>
            
        );
    }

}