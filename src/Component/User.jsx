import React from 'react'
import {useSelector , useDispatch} from "react-redux";
import { changeuser } from '../redux/action';
function User() {
    const  username=useSelector((state)=>state. username);
    const dispatch=useDispatch();
  return (
    <>
    <div className='text-center text-primary offset shadow'><h1>Username:{ username}</h1>

    <button className='btn btn-primary btn-center'onClick={()=>dispatch(changeuser())}>CHANGEUSER</button>
    </div>
    <hr></hr>
    </>
  )
}

export default User;