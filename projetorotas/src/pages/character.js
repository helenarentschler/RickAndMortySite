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

    constructor(){
        super();
        this.state = {
            character: {},
            episodes: []
        }
    }

    componentDidMount =()=> this.getData();
    getData = async () =>{
        try {
            let res = await axios({
                url: "https://rickandmortyapi.com/api/character/2",
                method: 'get'
            });
            if(res.status === 200){
                console.log(res.status)
            }
            console.log(res)
            console.log(res.data)
            res.data.episode.forEach(episode =>{
                api.get(episode).then(res =>{
                    console.log("res", res)
                    this.state.episodes.push(res)
                })
            })    
        this.setState({
            ...this.state,
            ...res.data
        })
        console.log("thistate", this.state)
        } catch(err) {
            console.log(err);
        }
    }


    render() {
        return(
            <>
                <div>
                    <Header name={this.state.name}/>
                </div>
                <div>
                    <Link exact to="/">Home</Link> 
                </div>
                <div className="grid row">
                    <ImgTextContainer Link={this.state.image} textc={'Status: ' + this.state.status} textd={'Species: ' + this.state.species}/>                
                </div>
                <div className="grid row">
                    {console.log("statefinal", this.state.episodes)}   
                    {this.state.episodes.map((episode) => {
                        console.log("episode", episode)
                        console.log("state", this.state)
                        <SmallContainer texta={'Episode: ' + episode.episode} textb={'Name: ' + episode.name}/>
                        } 
                    )}    
                </div>
            </>
        );
    }
}
