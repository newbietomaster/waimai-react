import { ORDER_DATA } from '../actions/actionTypes';

const initstate = {
    list: []
}

const getOrderData = (state, action) => {
    if (action.page === 0 ) {
        return { ...state, list: action.obj.data.digestlist }
    }else {
        let list = state.list;
        return { ...state, list: list.concat(action.obj.data.digestlist)}
    }
   
}

const orderReducer = (state = initstate, action) => {
    switch(action.type) {
        case ORDER_DATA: return getOrderData(state, action);
        default: return state;
    }
}
export default orderReducer;