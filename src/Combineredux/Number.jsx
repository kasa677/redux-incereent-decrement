import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inc , dec } from '../redux3/numberRedux/action';

function Number() {
  const number=useSelector((state)=>state.number.currentnumber)
  const dispatch=useDispatch();
  return (
    <div className="row ">
    <div className="card col-md-5 shadow">
      <div className="card-body">
        <h1>NUMBER:{number}</h1>
        <button className='btn btn-primary' onClick={()=>dispatch(inc())}>INCEREMENT</button>
        <button className='btn btn-success'onClick={()=>dispatch(dec())}>DECREMENT</button>
      </div>
    </div>
    </div>
  )
}

export default Number