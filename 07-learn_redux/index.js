import store from './Store/index.js'
import {addAction, decrement, increment, subAction} from "./Store/actionCreators.js";

store.subscribe(()=>{
    console.log(store.getState())
})


store.dispatch(addAction(5))
store.dispatch(subAction(5))
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(subAction(5))
store.dispatch(addAction(5))

