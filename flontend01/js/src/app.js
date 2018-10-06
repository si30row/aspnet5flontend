import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import t from "./test";
//import Hoge from './hoge'

class Hoge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0, startDate: '2018/10/20'};
    }

    componentDidMount() {
        alert(`componentDidMount ${this.props.id}`);
    }

    render() {
        let a = new Array();
        for (let i=0; i<Number(this.state.count); i++) {
            a.push(<p>{i}あ</p>);
        }

        return (
            <React.Fragment>
                <div style={{ color: "blue" }}>
                    test prop {this.props.id}
                    <input type="text" value={this.state.count} onChange={(e) => this.setState({ count: e.target.value })} />
                    {a}
                    <button onClick={(e) => t(this.props.id)}>call</button>
                    <DatePicker placeholderText="This highlights a week ago and a week from today" />


                </div>
            </React.Fragment>
        );
    }

}

ReactDOM.render(
	<Hoge id="(ー_ー)!!" />,
	document.getElementById('root')
);
