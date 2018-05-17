import React from 'react';

export default class Result extends React.Component{
    constructor(props){
        super(props);
        this.valueHandler = this.valueHandler.bind(this);
        this.eraseHandler = this.eraseHandler.bind(this);
        this.calculate = this.calculate.bind(this);
    }
    
    render(){
        return(
        <div>
        <button type="button" 
        className="col-md-1 cards"
        onClick={this.eraseHandler}>del</button>
        <button type="button" 
        className="col-md-1 cards"
        onClick={this.calculate}>=</button>
        </div>
    );
    }
        valueHandler(){
            this.props.valueHandler(this.props.value);
        }
        eraseHandler(){
            this.props.eraseHandler();
        }
        calculate(){
            this.props.calculate();
        }
    
}