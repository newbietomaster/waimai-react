import React from 'react';
import './SearchBar.scss';
class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div className="search-bar">
                <div className="bar-location">
                    <div className="location-icon"></div>
                    <div className="location-text">莆田市</div>
                </div>
                <div className="search-btn">
                    <p className="place-holder">卤面</p>
                </div>
            </div>
        )
    }
}
export default Home;