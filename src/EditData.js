import React, {Component} from 'react';

export default class EditData extends Component {
    constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event) {
    this.setState({value: event.target.value});
  }
    SaveEdit(){
        return false;
    }

    

    render() {
        return (
            <div>
                <span>Model: </span><br></br>
                <input type='text' name='model' value = {this.props.tv.model} onChange={this.handleChange}></input><br></br>
                <span>Title: </span><br></br>
                <input type='text' name='title' defaultValue = {this.props.tv.title}></input><br></br>
                <span>Display: </span><br></br>
                <input type='text' name='display' defaultValue = {this.props.tv.display}></input><br></br>
                <span>Price: </span><br></br>
                <input type='text' name='price' defaultValue = {this.props.tv.price}></input><br></br><br></br> 
                <input type='submit' value='Save' onClick={this.SaveEdit.bind(this)}></input>
            </div>
        )
    };

}