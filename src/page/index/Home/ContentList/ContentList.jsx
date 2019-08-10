import React from 'react';
import './ContentList.scss'
import { connect } from 'react-redux';
import { getListData } from '../../actions/contentListAction'
import ListItem from './ListItem/ListItem'
import ScrollView from 'component/ScrollView/ScrollView.jsx';
class ContentList extends React.Component {
    constructor(props) {
        super(props)
        this.page = 0;

        // 请求第一屏数据
        this.fetchData(this.page);

        // 标识页面是否可以滚动
        this.state = {
            isend: false,
            loadingText: '加载中'
        };
        
        
    }
    fetchData(page) {
        this.props.dispatch(getListData(page))
    }
    onLoadPage(){
        this.page++;
        // 最多滚动3页3次
        if (this.page > 3) {
            this.setState({
                isend: true
            });
        } else {
            this.fetchData(this.page);
        }
    }
    logName() {
        let list = this.props.list
        return list.map((item, index) => {
            return (
                <ListItem key={index} item={item}></ListItem>
            )
        })
    }
    render(){
        return (
            <div className="list-content">
               <h4 className="list-title">
                   <span className="title-line"></span>
                   <span>附近商家</span>
                   <span className="title-line"></span>
               </h4>
               <ScrollView loadCallback={this.onLoadPage.bind(this)} isend={this.state.isend}>
                    {this.logName()}
               </ScrollView>
            </div>
        )
    }
}
export default connect(
    state => ({
        list: state.contentListReducer.items
    })
)(ContentList)