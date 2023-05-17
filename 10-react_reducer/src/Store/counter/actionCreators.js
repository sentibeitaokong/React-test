import {
    ADD_NUMBER,
    SUB_NUMBER,
    INCREAMENT,
    DECREMENT,
} from "./constants.js";


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
