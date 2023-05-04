import React from 'react';
import banner2 from "../images/banner2.jpg";
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <div className='h-screen my-4 brightness-125 relative  my-container  w-full rounded-lg' style={{backgroundImage: `url(${banner2})`, backgroundSize:'cover'}}>
               <Link to="/register" className='btn btn-primary absolute mx-auto w-96 bottom-28 right-96'>Please Register</Link>
               
            </div>
    );
};

export default Contact;