import React, {Component} from "react";

export default class ImgContainer extends Component{
    render(){
        return(
            <div className="card">
                <img className="containerImage" src={ this.props.link}/>
            </div>
        );
    }

}
