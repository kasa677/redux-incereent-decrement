import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { chnsn } from '../redux3/userRedux/action';
function User() {
  const username=useSelector((state)=>state.user.username)
  const dispatch=useDispatch();
  return (
    <>
    <div className="row"></div>
    <div className="card col-md-4 py-5 shadow">
      <div className="card-body">
    <h1>USERNAME:{username}</h1>
    <button className='btn btn-primary' onClick={()=>dispatch(chnsn())}>CHANGE</button>
    </div>
    </div>
    </>
  )
}

export default User;