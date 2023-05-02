import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
       <div className="carousel w-full h-96">
  <div id="item1" className="carousel-item w-full" style={{backgroundImage: `url("../../public/banner1.jpg")`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
    <p className='text-cyan-100 font-semibold text-7xl text-center w-full pt-8'> Welcome to my <br/> chinese<br/> Ambitious Kitchen <br/>
    <Link to="/login" className='btn-primary'>Login</Link>
     </p>
  </div> 
  <div id="item2" className="carousel-item w-full" style={{backgroundImage: `url("../../public/banner6.jpg")`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
    <p className='text-cyan-100 font-semibold text-7xl text-center w-full pt-8'> Welcome to my <br/> chinese<br/> Ambitious Kitchen 
    <br/>
    <Link to="/login" className='btn-primary'>Login</Link>
     </p>
  </div> 
  <div id="item3" className="carousel-item w-full" style={{backgroundImage: `url("../../public/banner3.jpg")`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
    <p className='text-cyan-100 font-semibold text-7xl text-center w-full pt-8'> Welcome to my <br/> chinese<br/> Ambitious Kitchen <br/>
    <Link to="/login" className='btn-primary'>Login</Link> </p>
  </div> 
  <div id="item4" className="carousel-item w-full" style={{backgroundImage: `url("../../public/banner4.jpg")`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
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