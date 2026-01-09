import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";

import { Link } from "react-router";
import { auth } from "../../firebase/firebase.config";



const Register = () => {
  const [success,setSuccess]=useState(false)
 


  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;

    console.log(name, email, pass);

    
    setSuccess(false)

    
    createUserWithEmailAndPassword(auth,email,pass).then((result)=>{
      console.log(result)
       if(!result.user.emailVerified){
           alert('you have received a mail')
           return
        }
      sendEmailVerification(auth.currentUser).then(()=>{
        
       
      })

      if(result.user){
         setSuccess(true)
        setTimeout(() => {
          setSuccess('')
        }, 500);
      }
     

    }).catch((error)=>{
      console.log(error)
    })

  };


  return (
    <div>
      <div className="max-w-sm mx-auto border rounded-xl shadow-2xl p-5">
        <h2 className="font-bold text-2xl">Register Now Please</h2>
        <form onSubmit={handleRegister} className="flex flex-col items-start">
          <legend> Name :</legend>
          <input
            type="text"
            name="name"
            className="border ml-1 w-50  border-gray-200 rounded outline-none"
          />

          <legend> Email :</legend>
          <input
            type="email"
            name="email"
            className="border w-50  ml-1 border-gray-200 rounded outline-none"
          />

          <legend> Password :</legend>
          <input
            type="password"
            name="pass"
            className="border w-50 ml-1 border-gray-200 rounded outline-none"
          />
            <p>Already have an account ? Please <Link to="/login" className="text-blue-600">Login</Link></p>
          <input
            type="submit"
            value="Submit"
            className="btn btn-sm w-40 my-3 bg-primary mt-2"
          />
        
        </form>
        {
          success && 
            <p className="text-blue-600">Your registration successful</p>
        }
      </div>
    </div>
  );
};

export default Register;
