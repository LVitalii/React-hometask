import React, {Component} from 'react';

export default class AddData extends Component {
    constructor(props) {
    super(props);
    this.state = {
        value: '',
        model: null,
        title: null,
        display: null,
        price: null
    };   
  }

    handleChangeModel(event) {
        var model = event.target.value;
        this.setState({model: model});
    }

    handleChangeTitle(event) {
        var title = event.target.value;
        this.setState({title: title});
    }

    handleChangeDisplay(event) {
        var display = event.target.value;
        this.setState({display: display});
    }

    handleChangePrice(event) {
        var price = event.target.value;
        this.setState({price: price});
    }
    
    clickAdd(){
        var newTV = {};
        newTV.model = this.state.model;         
        newTV.title = this.state.title;
        newTV.display = this.state.display;
        newTV.price = this.state.price;
        this.props.adding(newTV);
    }


    render() {
        return (
            <div>
                <span>Model: </span><br></br>
                <input type='text' name='model' onChange={this.handleChangeModel.bind(this)}></input><br></br>
                <span>Title: </span><br></br>
                <input type='text' name='title' onChange={this.handleChangeTitle.bind(this)}></input><br></br>
                <span>Display: </span><br></br>
                <input type='text' name='display' onChange={this.handleChangeDisplay.bind(this)}></input><br></br>
                <span>Price: </span><br></br>
                <input type='text' name='price' onChange={this.handleChangePrice.bind(this)}></input><br></br>
                <input type='button' value='Save' onClick={this.clickAdd.bind(this)}></input><br></br>                
            </div>
        )
    };

}