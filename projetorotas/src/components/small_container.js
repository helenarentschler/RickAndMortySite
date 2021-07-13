import React, {Component} from "react";
export default class SmallContainer extends Component{
    render(){
        return(
            <div className="card card--small">
                <p>
                    {this.props.texta}<br/>
                    {this.props.textb}
                </p>
            </div>
        );
    }
}