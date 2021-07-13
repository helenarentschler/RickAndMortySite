import React, {Component} from "react";

export default class ImgTextContainer extends Component{
    render(){
        return(
            <div className="card">
                <img className="containerImage containerImage--text" src={this.props.link}/>
                <p>
                    Status: <br />
                    Species: <br />
                    Origin: <br />
                </p>
            </div>
        );
    }
}