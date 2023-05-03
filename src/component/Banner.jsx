import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../images/banner1.jpg'
import banner6 from '../images/banner6.jpg'
import banner3 from '../images/banner3.jpg'
import banner4 from '../images/banner4.jpg'
const Banner = () => {
    return (
        <>
       <div className="carousel w-full h-96">
  <div id="item1" className="carousel-item w-full" style={{backgroundImage: `url(${banner1})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
    <p className='text-cyan-100 font-semibold text-7xl text-center w-full pt-8'> Welcome to my <br/> chinese<br/> Ambitious Kitchen <br/>
    <Link to="/login" className='btn-primary'>Login</Link>
     </p>
  </div> 
  <div id="item2" className="carousel-item w-full" style={{backgroundImage: `url(${banner6})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
    <p className='text-cyan-100 font-semibold text-7xl text-center w-full pt-8'> Welcome to my <br/> chinese<br/> Ambitious Kitchen 
    <br/>
    <Link to="/login" className='btn-primary'>Login</Link>
     </p>
  </div> 
  <div id="item3" className="carousel-item w-full" style={{backgroundImage: `url(${banner3})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
    <p className='text-cyan-100 font-semibold text-7xl text-center w-full pt-8'> Welcome to my <br/> chinese<br/> Ambitious Kitchen <br/>
    <Link to="/login" className='btn-primary'>Login</Link> </p>
  </div> 
  <div id="item4" className="carousel-item w-full" style={{backgroundImage: `url(${banner4})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
    <p className='text-black font-semibold text-7xl text-center w-full pt-8'> Welcome to my <br/> chinese<br/> Ambitious Kitchen <br/>
    <Link to="/login" className='btn-primary'>Login</Link> </p>
  </div> 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
</>
    );
};

export default Banner;