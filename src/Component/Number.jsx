
import React from 'react'
import {useSelector , useDispatch} from "react-redux";
import { decrement, incerement } from '../redux/action';
import { DECREMENT, INCEREMENT } from '../redux/type';

function Number() {
 const number=useSelector((state=>state.number))
 const dispatch=useDispatch();
  return (
    <>
    <div className='text-center text-primary shadow offset'>
        <h1>{number}</h1>
        
    <button className='btn btn-primary' onClick={()=>dispatch(incerement())}>INCREMENT</button>
    <button className='btn btn-danger btn btn-center'onClick={()=>dispatch(decrement())}>DECREMENT</button>
    </div>
    </>
  )
}

export default Number;