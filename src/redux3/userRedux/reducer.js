import { CHANGE_USER } from "./type";

const initialState={
   username:"nikki",
}
export const userReducer=(state = initialState , action)=>{
    if(action.type===CHANGE_USER){
        return{...state , username:"maddy"}
    }
    return state;
}