import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { updateProfile } from '@firebase/auth';

const Register = () => {
  const {user,createUser}=useContext(AuthContext);
//   console.log(user.displayName);
const [error, setError]=useState('');
const [success, setSuccess]=useState('');
 const handleRegister=(event)=>{
    event.preventDefault();
    setSuccess('');
    setError('');
    const form=event.target;
    const name=form.name.value;
    const photoUrl=form.photoUrl.value;
    const email=form.email.value;
    const password=form.password.value;
    console.log(name, email, password, photoUrl);
    // validate
    if(password.length<=5){
        setError('Your password must be at least 6 characters');
        return;
    }
    createUser( email, password)
    .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser);
        setError('');
        form.reset();
        setSuccess("user has been created successfully");
        updateUserData(result.user, name, photoUrl);
    })
    .catch(error=>{
        console.log(error.message);
        setError(error.message);
    })
 }

 const updateUserData=(loggedUser, name, photoUrl)=>{
    updateProfile(loggedUser, {
        displayName:name,
        photoURL:photoUrl
    })
    .then(()=>{
        console.log("update profile");
    })
    .catch(error=>{
        console.log(error);
        setError(error.message);
    })
 }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register now!</h1>
            <p className='text-red-500 text-center text-2xl font-bold'>{error}</p>
            <p className='text-blue-500 text-center text-2xl font-bold'>{success}</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="photoUrl" name='photoUrl' className="input input-bordered" required/>
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover text-red-600 text-lg">Already have an account</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;