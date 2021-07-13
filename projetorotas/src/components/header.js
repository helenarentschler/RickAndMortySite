import React, {Component} from "react";

export default class Header extends Component{
    render(){
        return(
            <div>
                <h1 className="title">
                     {this.props.name}
                </h1>
            </div>
        );
    }
}