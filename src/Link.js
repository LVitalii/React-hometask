import React, { Component } from 'react';
import EditData from './EditData';
import './Link.css';

export default class Button extends Component {
    constructor() {
        super();
        this.state = {
            buttonColor: 'colorByDefault',
            showTVData: false,
            editClicked:  false            
        };        
    }

  

 
  linkClick()
  {
    console.log('button clicked');
    if (this.state.showTVData) {
        console.log('false');
      this.setState({     
        showTVData: false  
      });
    }
    else {
        console.log('true');
      this.setState({ 
        showTVData: true 
    });
    }
  }

  EditTVData = function () {
        if (this.state.editClicked) {
            this.setState({
                editClicked: false
            });
        }
        else {
            this.setState({
                editClicked: true
            });
        }
    }

    changeTVData(tv){
        this.setState({display: tv.display})
    }

    
   
    
    render() {
        return(
            
            <li>
                <a onClick={this.linkClick.bind(this)}>{this.props.tv.model} {this.props.tv.title}</a>
              
                {this.state.showTVData ?
                    (<div>
                        <b>Display: </b><span>{this.props.tv.display}   </span>
                        <b>Price: </b><span>{this.props.tv.price}   </span>
                        <input type='button' value='Edit' onClick={this.EditTVData.bind(this)}></input>
                        {this.state.editClicked ? <EditData changeTVData={this.changeTVData.bind(this)} tv = {this.props.tv} / > : null}
                        <p></p>
                    </div>) : null}
                
            </li>    
           
           
        )
    }
}