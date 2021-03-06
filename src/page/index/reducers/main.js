import tabReducer from './tabReducer';
import categoryReducer from './categoryReducer'
import contentListReducer from './contentListReducer'
import orderReducer from './orderReducer'
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
const reducers = combineReducers({
    tabReducer,
    categoryReducer,
    contentListReducer,
    orderReducer,
    router: routerReducer
})
export default reducers;