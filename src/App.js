import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './numbers.js'
import Result from './result.js'
class App extends Component {
     constructor(props){
          super(props)
          this.state ={
              values:[
                  1,2,3,4,5,6,7,8,9,0,'+','-','*','/'
              ],
              display:[],
              result:0
          }
          this.valueHandler = this.valueHandler.bind(this);
          this.eraseHandler = this.eraseHandler.bind(this);
          this.calculate = this.calculate.bind(this);
      }
  render() {
     return (
      <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-2">
                <div className="display">{this.state.display}</div>
                {this.state.values.map(value =>{
                    return <div key={value} >
                                <Number value={value} valueHandler={this.valueHandler} />
                            </div>
                })}
                <Result eraseHandler={this.eraseHandler} calculate={this.calculate}/>
            </div>
      </div>
    );
  }
  valueHandler(value){
     this.setState({
         display: this.state.display.concat(value)
     })
  }
  eraseHandler(){
      this.state.display.pop();
      this.setState({
         display: this.state.display
     })
  }
  calculate(){
        this.setState({display: [eval(this.state.display.join(''))]});
  }
        
}

export default App;