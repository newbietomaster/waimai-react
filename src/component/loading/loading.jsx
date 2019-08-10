import './loading.scss';
import React from 'react';
class loading extends React.Component {
    render() {
        let str = '加载中'
        if (this.props.isend) {
            str = '已经到底啦'
        }
        return <div className="loading">{str}</div>
    }
}
export default loading