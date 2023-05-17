import {
    ADD_NUMBER,
    SUB_NUMBER,
    INCREAMENT,
    DECREMENT,
    CHANGE_BANNERS,
    CHANGE_RECOMMEND,
    FETCH_HOME_MULTIDATA
} from "./constants.js";
import axios from 'axios'


export const addAction=num=>({
    type:ADD_NUMBER,
    num,
})

export const subAction=num=>({
    type:SUB_NUMBER,
    num,
})

export const increment=()=>({
    type:INCREAMENT,
})

export const decrement=()=>({
    type:DECREMENT,
})

// 轮播图和推荐的action
export const changeBannersAction = (banners) => ({
    type: CHANGE_BANNERS,
    banners
});

export const changeRecommendAction = (recommends) => ({
    type: CHANGE_RECOMMEND,
    recommends
});


// redux-saga拦截的action
export const fetchHomeMultidataAction = {
    type: FETCH_HOME_MULTIDATA
}

// redux-thunk中定义的action函数
export const getHomeMultidataAction = (dispatch, getState) => {
    axios({
        url: "http://123.207.32.32:8000/home/multidata",
    }).then(res => {
        const data = res.data.data;
        dispatch(changeBannersAction(data.banner.list));
        dispatch(changeRecommendAction(data.recommend.list));
    })
};