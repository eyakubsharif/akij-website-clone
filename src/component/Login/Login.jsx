import React, { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from 'react-router-dom';
import { auth } from './../../firebase/firebase.config';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [success,setSuccess]=useState(false)
    const navigate =useNavigate()
    const provider =new GoogleAuthProvider()

      const signInWithGoogle =()=>{
        signInWithPopup(auth,provider).then((result)=>{
            console.log(result.user)
            navigate('/')
         
        }).catch((error)=>{
            console.log(error)
        })


  }

  const handleSignin=(e)=>{
    e.preventDefault();
    const email =e.target.email.value;
    const password =e.target.password.value;
    console.log(email,password);

    setSuccess(false)
    signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    // Signed in 
   console.log(result)
   if(result.user){
    setSuccess(true)
    navigate('/')
   }
   
    // ...
  })
  .catch((error) => {
   console.log(error)
  });
  }

  return (
    <div className="card bg-base-100 max-w-sm mx-auto   shadow-2xl">
      <div className="card-body p-5 border rounded-xl">
        <p className="font-bold text-2xl">Please Login </p>
        <form onSubmit={handleSignin} className="fieldset">
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <p>If you have no account ?Please <Link to="/register" className="text-blue-600 underline">Register</Link></p>
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        {
          success && <p className="text-green-500">User registration has been successful</p>
        }
         <button onClick={signInWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
      </div>
    </div>
  );
};

export default Login;
