import { CHANGE_USER, DECREMENT, INCEREMENT } from "./type"

export const incerement=()=>{
    return{
        type:INCEREMENT
    }
}
export const decrement=()=>{
    return{
        type:DECREMENT
    }
}
export const changeuser=()=>{
    return{
        type:CHANGE_USER
    }
}