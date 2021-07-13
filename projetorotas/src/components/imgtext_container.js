import React, {Component} from "react";

export default class ImgTextContainer extends Component{
    render(){
        return(
            <div className="card card--medium">
                <img className="containerImage containerImage--text" src={this.props.link}/>
                <div style={{display: "block"}}>
                    <p className="cardP">Status: {this.props.textc} </p>
                    <p className="cardP">Species: {this.props.textd} </p>
                    <p className="cardP">Origin: {this.props.texte} </p>
                </div>
            </div>
        );
    }
}