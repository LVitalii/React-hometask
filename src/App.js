import React, { Component } from 'react';
import EditData from './EditData';
import AddData from './AddData';
import './App.css';

import Link from './Link';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      showDetails: false,
      addClicked: false,
      products: [
      {model: 'Samsung', title: 'smg-42', display: 42, price: '250$'},
      {model: 'Philips', title: 'phlps-32', display: 32, price: '190$'},
      {model: 'Sony', title: 'sn-42', display: 52, price: '500$'},
    ]
    };  
  }

  buttonClick()
  {
    if (this.state.showDetails) {
      this.setState({     
        showDetails: false  
      });
    }
    else {
      this.setState({ 
        showDetails: true 
    });
    }
  }

  AddTVShown(){
        if (this.state.addClicked) {
            this.setState({
                addClicked: false
            });
        }
        else {
            this.setState({
                addClicked: true
            });
        }
    }

  AddTV(tv){
    var newProducts = this.state.products.slice(0);
    newProducts.push(tv);
    this.setState({products: newProducts});
  }

  render() {
  var elementsProducts=[];
    return (
     <div >
       <h1>These are tv for sale:</h1>
       <ul>
      {this.state.products.map(function(product, id){
        elementsProducts.push(<Link tv={product} key={id}/>
          
          );
      })}
        {elementsProducts}
      </ul>
       <input type='button' value='Add' onClick={this.AddTVShown.bind(this)}></input>
        {this.state.addClicked ? <AddData adding = {this.AddTV.bind(this)}/> : null}
    </div> 
    );
  }
}
