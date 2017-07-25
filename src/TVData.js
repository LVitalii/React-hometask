import React, { Component } from 'react';
import EditData from './EditData';

export default class TVData extends Component {
    constructor(){
        super();
        this.state={
            editClicked:  false
        };
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

    printClicked()
    {
        console.log('clicked');
    }

    printNotClicked()
    {
        console.log('not.clicked');
    }

    render() {
        return(
            <div>
                <b>Display: </b><span>{this.props.tv.display}   </span>
                <b>Price: </b><span>{this.props.tv.price}   </span>
                <input type='button' value='Edit' onClick={this.EditTVData.bind(this)}></input>
                {this.state.editClicked ? <EditData tv = {this.props.tv} id = {this.props.id} / > : null}
                <p></p>
            </div>
        )
    }
}