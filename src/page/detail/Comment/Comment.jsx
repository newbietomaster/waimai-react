import 'component/common.scss';
import './Comment.scss'
import React from 'react';

import { connect } from 'react-redux';







class Comment extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){

        return (
            <div>
               1
            </div>
        );
    }
}

export default connect(
    // state =>({
    //     tabs: state.tabReducer.tabs
    // })
)(Comment);