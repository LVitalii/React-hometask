import React, { Component } from 'react';
import './App.css';

import Link from './Link';

export default class App extends Component {
  constructor(){
    super();
    this.products=[
      {model: 'Samsung', title: 'smg-42', display: 42, price: '250$'},
      {model: 'Philips', title: 'phlps-32', display: 32, price: '190$'},
      {model: 'Sony', title: 'sn-42', display: 52, price: '500$'},
    ];

    this.clickedVar = 0;
    this.getValue = function(){
    return this.name;    
  }
    this.state = {
      title: 'hello Vitalii',
      buttonColor: 'colorByDefault',
      showForm: false
    };  

    this.obj = {name: 'it is too late'};
  }
  
  getElementsOfProducts(){
    this.products.forEach(function(element, index,array){
      this.elementsProducts.push(element);
    });
    return this.elementsProducts;
  }

  buttonClick()
  {
    console.log('button clicked');
    if (this.clickedVar % 2 == 0) {
      this.setState({     
        buttonColor: 'colorClicked',
        showForm: true  
      });
    }
    else {
      this.setState({ 
        buttonColor: 'colorByDefault',
        showForm: false 
    });
    }
    this.clickedVar++;
  }



  render() {
  var elementsProducts=[];
    return (
     <div >
       <h1>These are tv for sale:</h1>
       <ul>
      {this.products.map(function(product, id){
        elementsProducts.push(<Link tv={product} key={id}/>
          
          );
      })}
        {elementsProducts}
      </ul>
    </div> 
    );
  }
}
