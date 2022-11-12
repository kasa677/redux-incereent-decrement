import { FETCH_BEGIN, FETCH_ERROR, FETCH_SUCCESS } from "./type";

 const initialState={
 isLoading:false,
 drinks:[],
}
export const fetchReducer=(state=initialState , action)=>{
    if(action.type===FETCH_BEGIN){
        return{...state  , isLoading:true}
    }
    if(action.type===FETCH_SUCCESS){
        return{...state , isLoading:false}
    }
    if(action.type===FETCH_ERROR){
        return{...state , isLoading:false}
    }
        return state;
}