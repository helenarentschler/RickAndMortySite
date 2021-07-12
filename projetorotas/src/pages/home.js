import React, {Component} from "react";
import Header from "./../components/header";
import ImgContainer from "./../components/img_container";
import LocationContainer from "./../components/location_container";

export default class Home extends Component{
    render(){
        return(
            <div>
                <Header />
                <div className="searchBar">
                    <input type="text" id="lname" name="lname" placeholder="search character"/>
                </div>
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
                    <LocationContainer />
                    <LocationContainer />
                    <LocationContainer />
                    <LocationContainer />
                    <LocationContainer />
                </div>
            </div>
        );
    }
}