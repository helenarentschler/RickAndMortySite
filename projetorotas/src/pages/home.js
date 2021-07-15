import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Header from "./../components/header";
import ImgContainer from "./../components/img_container";
import SmallContainer from "./../components/small_container";



const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
});

export default class Home extends Component{
    state = {
        locations: []
    }

    constructor(){
        super();
        api.get("https://rickandmortyapi.com/api/location").then(res =>{
            console.log("constructorget", res.data)
            console.log("state", this.state.locations)
            this.setState({locations: res.data.results})
        }) 
    }
    
    render(){
        return(
            <div>
                <Header name="Rick and Morty"/>
                <div className="searchBar">
                    <form action="/character">
                        <input type="text" id="lname" name="lname" placeholder="search character"/> 
                        <button type="submit">pesquisar</button>
                    </form>       
                </div>
                <Link to="/character">Character</Link> 
                <div className="grid row">
                    <div className="card card--noBorder card--noPaddingTop">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu diam eu ante imperdiet cursus. In convallis porttitor dui non lobortis. Phasellus non magna vulputate, ultricies felis eget, facilisis ante. Donec sed eros ac tortor efficitur cursus. Integer facilisis faucibus turpis in pretium. Aenean mattis laoreet nibh et sollicitudin. Vestibulum tellus tortor, feugiat ac sollicitudin vel, aliquet in turpis. Donec malesuada neque velit, eu auctor enim rhoncus quis. Suspendisse volutpat ut dolor et condimentum.
                        </p>
                    </div>
                    <ImgContainer link="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2021/04/Ilustracao-Rick-and-Morty-PNG-778x1024.png"/>
                    <ImgContainer link="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-morty-close-transparent-png-stickpng-3.png"/>
                </div>
                <div className="grid row">
                    {console.log("statefinal", this.state.locations)}
                    {this.state.locations.map(location =>
                        <SmallContainer texta= {'Location: '+ location.name} textb={'Dimention: '+ location.dimention}/>
                        )}    
                </div>
            </div>
        );
    }
}
