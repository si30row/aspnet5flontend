import React, { Component, Fragment } from 'react';

export default class EInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let a = <button onClick={(e) => alert(this.refs.ii.value)}>val</button>;
        if (!this.props.a) {
            a = "";
        }

        return (
            <Fragment>
                <input type='text' ref='ii' {...this.props} style={{ backgroundColor: 'yellow' }} />
                {a}
            </Fragment>
        );
    }
}