import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import Header from "./../components/header";
import ImgTextContainer from "./../components/imgtext_container";
import SmallContainer from "./../components/small_container";


const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
});
export default class Character extends Component{
    state = {
        character: {}
    }

    constructor(){
        super();
        api.get("https://rickandmortyapi.com/api/character/2").then(res =>{
            this.setState({
                character: res.data
            })
            console.log(this.state.character)
            console.log(res.data)
        })
    }
    render(){
        return(
            <>
                <div>
                    <Header name={this.state.character.name}/>
                </div>
                <div>
                 <Link exact to="/">Home</Link> 
                </div>
                <div className="grid row">
                    <ImgTextContainer Link={this.state.character.image} textc={'Status: ' + this.state.character.status} textd={'Species: ' + this.state.character.species} texte={'Origin: ' + this.state.character.origin.name}/>                
                </div>
                <div className="grid row">
                    <SmallContainer texta="Episode: " textb="Season: " />
                    <SmallContainer texta="Episode: " textb="Season: " />
                    <SmallContainer texta="Episode: " textb="Season: " />
                    <SmallContainer texta="Episode: " textb="Season: " />
                    <SmallContainer texta="Episode: " textb="Season: " />
                </div>
            </>
        );
    }
}
