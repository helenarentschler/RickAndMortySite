import React, {Component} from "react";
import Header from "./../components/header";
import ImgContainer from "./../components/img_container";
import SmallContainer from "./../components/small_container";

export default class Character extends Component{
    render(){
        return(
            <>
                <div>
                    <Header name="Morty"/>
                </div>
                <div className="grid row">
                    <ImgContainer link=" " />
                    <div className="card card--noBorder card--noPaddingTop">
                        <p>
                            Status: <br />
                            Species: <br />
                            Origin: <br />
                        </p>
                    </div>
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
