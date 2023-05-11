import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../Reducer/userReducer';

function Login() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("")
  const dispatch = useDispatch();

  const login = () =>{
    const userdata = {
      name,password
    }
    console.log(userdata);
    dispatch(loginUser(userdata));
    setname("");
    setpassword("");
  }
  return (
    <div className='user-container'>
      <h1>Login Page</h1>

      <input
      type='text'
      value={name}
      onChange={(e)=>setname(e.target.value)}
      placeholder='Enter Name'
      />

      <input
      type='password'
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      placeholder='Enter Password'
      />

      <button
      onClick={login}
      >Login</button>
    </div>
  )
}

export default Login