import { DECREMENT, INCEREMENT } from "./type"

export const inc=()=>{
    return{
        type:INCEREMENT
    }
}
export const dec=()=>{
    return{
        type:DECREMENT
    }
}