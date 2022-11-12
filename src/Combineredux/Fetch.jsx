import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {cocktail} from "../redux3/cocktailapi/action"
function Fetch() {
     const drinks= useSelector((state)=>state.drinks)
  //  export const useSelector((state)=>console.log(state.drinks))
    
    const dispatch=useDispatch();
    useEffect(()=>{
   dispatch(cocktail());
    },[])
  return (
    <div className="card">
  
    
    </div>
  )
}

export default Fetch