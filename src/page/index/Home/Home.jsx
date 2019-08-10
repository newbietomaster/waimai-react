import React from 'react';
import Header from './Header/Header.jsx'
import Category from '../Home/Category/Category'
import ContentList from '../Home/ContentList/ContentList'
class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return <div>
            <Header />
            <Category />
            <ContentList />
        </div>
    }
}
export default Home;