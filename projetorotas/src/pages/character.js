import React, {Component} from "react";
import Header from "./../components/header";
import ImgTextContainer from "./../components/imgtext_container";
import SmallContainer from "./../components/small_container";

export default class Character extends Component{
    render(){
        return(
            <>
                <div>
                    <Header name="Morty"/>
                </div>
                <div className="grid row">
                    <ImgTextContainer link="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-morty-close-transparent-png-stickpng-3.png"/>                
                </div>
                <div className="grid row">
                    <SmallContainer texta="Episode " textb="Season " />
                    <SmallContainer texta="Episode " textb="Season " />
                    <SmallContainer texta="Episode " textb="Season " />
                    <SmallContainer texta="Episode " textb="Season " />
                    <SmallContainer texta="Episode " textb="Season " />
                </div>
            </>
        );
    }
}
