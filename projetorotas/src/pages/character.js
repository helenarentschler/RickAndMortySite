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
            
            let requests = res.data.episode.map((episode) => { 
                return new Promise((resolve, reject) => {
                    requests({
                        api.get(episode).then(res =>{
                        console.log("res", res.data)
                    },
                    (err, res, body) => {
                        if (err) { reject(err) }
                    })
                })  
                Promise.all(requests).then((body) => { 
                    body.forEach(res => {
                        if (res)
                            this.state.episodes.push(res.data)
                    })
                }).catch(err => console.log(err))
            })
            
            this.setState({
                ...this.state,
                ...promises
             })
            console.log("episodes", this.state.episodes)
            
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
                    {console.log("stateee", this.state.episodes)}   
                    {this.state.episodes.map((ep) => {
                        console.log("episode", ep)
                        console.log("state", this.state);
                        <SmallContainer texta={'Episode: ' + ep.episode} textb={'Name: ' + ep.name}/>
                        } 
                    )}    
                </div>
            </>
        );
    }
}
