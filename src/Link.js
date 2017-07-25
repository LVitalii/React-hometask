import React, { Component } from 'react';
import TVData from './TVData';
import './Link.css';

export default class Button extends Component {
    constructor() {
        super();
        this.clickedVar=0;
        this.state = {
            buttonColor: 'colorByDefault',
            showTVData: false
        };
    }

  
  buttonClick()
  {
    console.log('button clicked');
    if (this.clickedVar % 2 == 0) {
      this.setState({     
        buttonColor: 'colorClicked',
        showTVData: true  
      });
    }
    else {
      this.setState({ 
        buttonColor: 'colorByDefault',
        showTVData: false 
    });
    }
    this.clickedVar++;
  }
    
    render() {
        return(
            <li>
                <a onClick={this.buttonClick.bind(this)}>{this.props.tv.model} {this.props.tv.title}</a>
                {this.state.showTVData ? <TVData tv={this.props.tv} /> : null}
            </li>    
        )
    }
}