import React from 'react';
import banner3 from "../images/banner3.jpg";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='h-screen my-4 brightness-125 relative  my-container  w-full rounded-lg' style={{backgroundImage: `url(${banner3})`, backgroundSize:'cover'}}>
               <Link to="/register" className='btn btn-primary absolute mx-auto w-96 bottom-28 right-96'>Please Register</Link>
               
            </div>
    );
};

export default About;