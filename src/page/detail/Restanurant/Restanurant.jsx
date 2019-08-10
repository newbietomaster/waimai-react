import 'component/common.scss';
import './Restanurant.scss'
import React from 'react';

import { connect } from 'react-redux';







class Restanurant extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){

        return (
            <div>
               123
            </div>
        );
    }
}

export default connect(
    // state =>({
    //     tabs: state.tabReducer.tabs
    // })
)(Restanurant);