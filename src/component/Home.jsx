import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import Chefs from './Chefs';
import {  ColorRing } from  'react-loader-spinner'
import banner2 from '../images/banner2.jpg'
import { Link } from 'react-router-dom';
import Receipe from './Receipe';
const Home = () => {
    const [receipes, setRecipe]=useState([]);
    useEffect(()=>{
        fetch("https://assignment10server-mdalaminfaraji.vercel.app/recipeData")
        .then(result=>result.json())
        .then((data)=>setRecipe(data));
    },[]);
//    console.log(receipes);
    const chefData=useLoaderData();
    <ColorRing
    visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
    // console.log(chefData);
    return (
        <div className='bg-slate-200'>
            <div className=' my-container' >
                <Banner></Banner>
            </div>
             <h1 className='text-center text-4xl font-semibold uppercase  pb-3'>Our Experts Chefs</h1>
            <div className='my-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    chefData.map(chef=><Chefs key={chef.id} chef={chef}></Chefs>)
                }
            </div>
            
           <div className='my-container'>
           <h1 className='text-center text-4xl  font-bold uppercase'>Most Popular Recipes</h1>
            <div className='my-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    receipes.map(receipe=><Receipe key={receipe.id} receipe={receipe}></Receipe>)
                }
            </div>
           </div>
           
        </div>
    );
};

export default Home;