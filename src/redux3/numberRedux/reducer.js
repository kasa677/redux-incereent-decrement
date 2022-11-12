import { DECREMENT, INCEREMENT } from "./type";

const initialState={
    currentnumber:0
}

export const numberReducer=(state= initialState,  action)=>{
    if(action.type===INCEREMENT){
        return{...state , currentnumber: state.currentnumber+1}
    }
    if(action.type===DECREMENT){
        return{...state, currentnumber:state.currentnumber-1}
    }
    return state;
}
