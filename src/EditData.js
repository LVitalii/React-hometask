import React, {Component} from 'react';

export default class EditData extends Component {
    constructor(props) {
    super(props);
    this.state = {value: ''};   
  }

    handleChangeModel(event) {
        var model = event.target.value;
        this.props.tv.model = model
        this.props.changeTVData(this.props.tv);
    }

    handleChangeTitle(event) {
        var title = event.target.value;
        this.props.tv.title = title
        this.props.changeTVData(this.props.tv);
    }

    handleChangeDisplay(event) {
        var display = event.target.value;
        this.props.tv.display = display
        this.props.changeTVData(this.props.tv);
    }

    handleChangePrice(event) {
        var price = event.target.value;
        this.props.tv.price = price
        this.props.changeTVData(this.props.tv);
    }
    



    render() {
        return (
            <div>
                <span>Model: </span><br></br>
                <input type='text' name='model' value={this.props.tv.model} onChange={this.handleChangeModel.bind(this)}></input><br></br>
                <span>Title: </span><br></br>
                <input type='text' name='title' value={this.props.tv.title} onChange={this.handleChangeTitle.bind(this)}></input><br></br>
                <span>Display: </span><br></br>
                <input type='text' name='display' value={this.props.tv.display} onChange={this.handleChangeDisplay.bind(this)}></input><br></br>
                <span>Price: </span><br></br>
                <input type='text' name='price' value={this.props.tv.price} onChange={this.handleChangePrice.bind(this)}></input><br></br><br></br>                
            </div>
        )
    };

}