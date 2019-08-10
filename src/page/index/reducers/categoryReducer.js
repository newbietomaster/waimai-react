import { HEAD_DATA } from '../actions/actionTypes';

const initstate = {
    items: []
}

const getCategory = (state, action) => {
    return { ...state, items: action.obj.data.primary_filter }
}

const categoryReducer = (state = initstate, action) => {
    switch(action.type) {
        case HEAD_DATA: return getCategory(state, action);
        default: return state;
    }
}
export default categoryReducer;