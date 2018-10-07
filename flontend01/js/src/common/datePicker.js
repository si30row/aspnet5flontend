import React, { Component, Fragment } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class SDataPicker extends Component {
    constructor(props) {
        super(props);

        this.handleButton = this.handleButton.bind(this);
    }

    componentDidMount() {
    }

    handleButton(e) {
        this.refs.textDate.input.focus();
    }

    render() {
        return (
            <Fragment>
                <DatePicker {...this.props} locale='ja' ref='textDate' /><button onClick={this.handleButton}>a</button>
            </Fragment>
        );
    }
}