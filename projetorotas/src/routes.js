import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/home";
import Character from "./pages/character";

export default class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/character">
                        <Character />
                    </Route>
                </Switch>
            </BrowserRouter>

        );
    }

}