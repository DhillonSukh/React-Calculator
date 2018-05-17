import React from 'react';

export default class Map extends React.Component{
    constructor(props){
        super(props);
        this.valueHandler = this.valueHandler.bind(this);
    }
    
    render(){
        return(
        <button type="button" 
        className="col-md-1 cards"
        onClick={this.valueHandler}>{this.props.value}</button>
    );
    }
        valueHandler(){
            this.props.valueHandler(this.props.value);
        }
    
}
