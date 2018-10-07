import React from 'react';
import ReactDOM from 'react-dom';
//import DatePicker from 'react-datepicker';
import SDataPicker from './common/datePicker';
import moment from 'moment';
import t from "./test";
import EInput from './common/eInput';

//import 'react-datepicker/dist/react-datepicker';

//import Hoge from './hoge'

class Hoge extends React.Component {
    constructor(props) {
        super(props);
        //moment.lang('ja');
        this.state = { count: 0, startDate: moment(), ei: 'aaaa', a: false};
    }

    componentDidMount() {
        console.log(`componentDidMount ${this.props.id}`);
    }

    render() {
        let a = new Array();
        for (let i=0; i<Number(this.state.count); i++) {
            a.push(<p>{i}あ</p>);
        }

        return (
            <React.Fragment>
                <div>
                    test prop {this.props.id}
                    <input type="text" value={this.state.count} onFocus={(e) => this.setState({ count: 3 })} onChange={(e) => this.setState({ count: e.target.value })} className="aaaa" />
                    <input type="text" value={this.state.count} onFocus={(e) => this.setState({ count: 4 })} onChange={(e) => this.setState({ count: e.target.value })} className="aaaa" />
                    {a}
                    <button onClick={(e) => t(this.props.id)} id="bbbb">call</button>
                    <button onClick={(e) => document.querySelectorAll('#cccc')[0].focus()}>call</button>
                    <SDataPicker placeholderText="YYYY/MM/DD" selected={this.state.startDate} onChange={(date) => this.setState({ startDate: date })} id="cccc" />
                    {this.state.ei}<EInput value={this.state.ei} onChange={(e) => this.setState({ ei: e.target.value })} a={this.state.a} /><button onClick={(e) => this.setState({a: (this.state.a ? false : true)})}>表示</button>
                </div>
            </React.Fragment>
        );
    }

}

ReactDOM.render(
	<Hoge id="(ー_ー)!!" />,
	document.getElementById('root')
);
