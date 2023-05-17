import store from './Store/index.js'
import {addAction, decrement, increment, subAction} from "./Store/actionCreators.js";

store.subscribe(()=>{
    console.log(store.getState())
})


/*store.dispatch(addAction(5))
store.dispatch(subAction(5))
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(subAction(5))
store.dispatch(addAction(5))*/


//中间件原理

//1.基本做法
// console.log('dispatch做法前--dispatching action',addAction(10))
// store.dispatch(addAction(10))
// console.log('dispatch之后',store.getState())


//2.封装函数
/*function disPatchLogging(action) {
    console.log('dispatch做法前--dispatching action',action)
    store.dispatch(action)
    console.log('dispatch之后',store.getState())
}
disPatchLogging(addAction(10))*/


//3.在函数的基础上进行优化，目的使用原有dispatch方法就能调用中间件   做法修改原有的dispatch
// hack技术: monkeyingpatch
/*const next=store.dispatch
function disPatchLogging(action){
    console.log('dispatch做法前--dispatching action',action)
    next(action)
    console.log('dispatch之后',store.getState())
}
store.dispatch=disPatchLogging
store.dispatch(addAction(10))*/

// 4.将之前的操作进行封装
//封装patchLogging的代码
function   patchLogging(store){
    const next=store.dispatch
    function disPatchLogging(action){
        console.log('dispatch做法前--dispatching action',action)
        next(action)
        console.log('dispatch之后',store.getState())
    }
    return disPatchLogging
}
// patchLogging(store)(addAction(10))
// patchLogging(store)

//5.封装patchThunk的功能
function patchThunk(store){
    const next=store.dispatch
    function disPatchLogging(action){
        if(typeof action==='function'){
            //thunk本身是个函数 可以执行异步操作
            action(store.dispatch,store.getState())
        }else{
            //执行的是action里面的对象
            next(action)
        }
    }
    return disPatchLogging
}
const getHomeMultidataAction = (dispatch, getState) => {
    console.log('11111')
};
// patchThunk(store)(getHomeMultidataAction)
// 5.封装applyMiddleware
function applyMiddlewares(...middlewares) {
    // const newMiddleware = [...middlewares];
    middlewares.forEach(middleware => {
        store.dispatch = middleware(store);
    })
}

applyMiddlewares(patchLogging, patchThunk);
store.dispatch(getHomeMultidataAction)

