// import React from 'react';
// import { connect } from 'react-redux';
// import BottomBar from '../BottomBar/BottomBar.jsx';
// import Home from '../Home/Home.jsx'
// import Order from '../Order/Order.jsx'
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import My from '../My/My.jsx';
// class Main extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             // <div>
//             //     {/* <Home /> */}
//             //     {/* <Order /> */}
//             //     <My />
//             //     <BottomBar />
//             // </div>
//             <Router>
//                 <div>
//                     <Route exact path="/" component={Home} />
//                     <Route path="/order" component={Order} />
//                     <Route path="/my" component={My} />
//                     <BottomBar />
//                 </div>
//             </Router>
//         )
//     }
// }
// export default connect(
//     // state => ({
       
//     // })
// )(Main);
import 'component/common.scss';

import React from 'react';

import { connect } from 'react-redux';

import { Route, withRouter } from 'react-router-dom';
// import Loadable from 'react-loadable';
import BottomBar from '../BottomBar/BottomBar';
import Home from '../Home/Home';
import Order from '../Order/Order.jsx'
import My from '../My/My.jsx';
// import Loading from 'component/loading/loading.jsx';


class Main extends React.Component {
    constructor(props) {
        super(props);

    }
    // loadMy(location, cb){
    //     import(/* webpackChunkName: "my" */'../My/My').then((component)=>{
    //         cb(null, component.default);
    //     });
    // }
    render(){

        return (
            <div>
                <Route exact path="/home" component={Home}/>
                <Route path="/order" component={Order}/>
                <Route path="/my" component={My}/>
                <BottomBar />
            </div>
        );
    }
}

export default withRouter(connect(
    // state =>({
        
    // })
)(Main));