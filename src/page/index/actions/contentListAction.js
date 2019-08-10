import { LIST_DATA } from "./actionTypes";
import axios from "axios";

export const getListData = (page) => (dispatch) => {
    axios({
        method: 'get',
        url: '/json/listParams.json'
    }).then(res => {
        dispatch({
            type: LIST_DATA,
            page: page,
            obj: res.data
        })
    })
}