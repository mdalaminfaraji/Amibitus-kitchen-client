import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { FaFacebookSquare, FaGithubAlt, FaGoogle } from "react-icons/fa";


const Login = () => {
    const [error, setError]=useState('');
    const [success, setSuccess]=useState('');
    const {signIn, signInWithGoogle, signInWithGithub}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname|| '/';

    const handleLogin=(event)=>{
          event.preventDefault();
          setError('');
          setSuccess('');
          const form=event.target;
          const email=form.email.value;
          const password=form.password.value;
          console.log(email, password);
          if(password.length<6){
            setError('Please Enter valid password and Email');
            return;
          }

          signIn(email, password)
          .then(result=>{
            const loggedUser=result.user;
            navigate(from, {replace:true});
            console.log(loggedUser);
            setSuccess('User login successful');
            setError('');
            form.reset();

          })
          .catch(error=>{
            setError(error.message);
          })
    }

    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            const loggedUser=result.user;
            navigate(from, {replace:true});
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handleGithubSignIn=()=>{
        signInWithGithub()
        .then(result=>{
            const loggedUser=result.user;
            navigate(from, {replace:true});
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <>
         <div className="text-center bg-base-200 py-4">
            <h1 className="text-5xl font-bold">Please Login now!</h1>
            <p className='text-red-500 text-center font-bold text-xl'>{error}</p>
             <p className='text-blue-500 text-center font-bold text-xl'>{success}</p>
          </div>
        
        <div className='bg-base-200'>
             <div className="mx-auto w-1/2 ">
           
        <div className="hero-content flex-col grid grid-cols-1 md:grid-cols-2">
          
          <div className="card flex-shrink-0 max-w-sm w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className='mb-4 ml-6'>
            <Link to="/register" className="label-text-alt link link-hover">
            New to Ambitious kitchen? <span className='text-red-500'>Please Register</span>
            </Link>
            </p>
            
          </div>
          <div>
          <div>
            <button onClick={handleGoogleSignIn} className="btn btn-active btn-primary">
             <p className='inline-flex'><FaGoogle className='text-black text-2xl'></FaGoogle> Continue with Google </p>  </button>
            </div>
          <div>
            <button onClick={handleGithubSignIn} className="btn btn-active btn-primary">
                <p className='inline-flex'><FaGithubAlt className='text-black text-2xl'></FaGithubAlt> Continue with github </p></button>
            </div>
          </div>

        </div>
        </div>
        </div>
        </>
       
    );
};

export default Login;