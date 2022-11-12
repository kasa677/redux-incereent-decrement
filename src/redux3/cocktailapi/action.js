import { FETCH_BEGIN, FETCH_ERROR, FETCH_SUCCESS } from "./type"

 export const cocktail=()=>{
   return (dispatch)=>{
    dispatch({type:FETCH_BEGIN})
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s`)
    .then((resp)=>resp.json())
    .then((data)=>{
        console.log(data)
        dispatch({type:FETCH_SUCCESS})
    })
    .catch((err)=>dispatch({type:FETCH_ERROR}))
   }
}