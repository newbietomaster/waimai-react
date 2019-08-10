import { LIST_DATA } from '../actions/actionTypes';

const initstate = {
    items: []
}

const getListData = (state, action) => {
    if (action.page === 0 ) {
        return { ...state, items: action.obj.data.poilist }
    }else {
        let list = state.items;
        return { ...state, items: list.concat(action.obj.data.poilist)}
    }
   
}

const contentListReducer = (state = initstate, action) => {
    switch(action.type) {
        case LIST_DATA: return getListData(state, action);
        default: return state;
    }
}
export default contentListReducer;