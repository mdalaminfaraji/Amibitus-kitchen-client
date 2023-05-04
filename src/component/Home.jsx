import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import Chefs from './Chefs';
import {  ColorRing } from  'react-loader-spinner';
import Receipe from './Receipe';
import breakFast from '../images/breakFast.jpg';
import drink from '../images/drink.jpg';
import lunch from '../images/lunch.jpg';
import tea from '../images/tea.png';
import desert from '../images/desert.png';
import Dinner from '../images/Dinner.jfif';

const Home = () => {
    const [receipes, setRecipe]=useState([]);
    const [loadingInProgress, setLoading] = useState(true);
    useEffect(()=>{
        fetch("https://assignment10server-mdalaminfaraji.vercel.app/recipeData")
        .then(result=>result.json())
        .then((data)=>setRecipe(data));
        setLoading(false);
    },[]);
//    console.log(receipes);
    const chefData=useLoaderData();
    
    // console.log(chefData);
    return (
        <div className='bg-slate-200'>
                  <div className=' w-8 mx-auto'>
                  { loadingInProgress && <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />}
                  </div>
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
           <div className='my-container'>
           <h1 className='text-center text-4xl font-semibold uppercase  pb-3'>Our Services</h1> 
           <p className='text-center text-xl pb-4'>Our Ambitious kitchen is very Popular in the chinese city.Most of the people take various kind of services everyday. Everyday We provide different kind of service breakfast lunch dinner etc.</p>
           <hr  style={{
            color: '#156',
            backgroundColor: '#120',
            height: .5,
            borderColor : '#000000',
             }}/>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
             <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={breakFast} className='w-40 h-40 p-3' alt="Movie"/> </figure>
                <div className="card-body">
                    <h2 className="card-title">BreakFast!!!</h2>
                    <p>Also known as rice porridge, congee is a popular breakfast  </p>
                    
                </div>
             </div>
             <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={lunch} className='w-40 h-40 p-3' alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Lunch!!!</h2>
                    <p>These long, deep-fried dough sticks are a popular lunch item in China.</p>
                    
                </div>
             </div>
             <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={Dinner} className='w-40 h-40 p-3' alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Dinner!!!</h2>
                    <p>Steamed buns filled with meat, vegetables,  in China</p>
                    
                </div>
             </div>
             <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={tea} className='w-40 h-40 p-3' alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Special Tea!!!</h2>
                    <p>These steamed dumplings are typically filled with...</p>
                    
                </div>
             </div>
             <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={desert} className='w-40 h-40 p-3' alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Desert!!!</h2>
                    <p>These steamed dumplings are very.....</p>
                    
                </div>
             </div>
             <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={drink} className='w-40 h-40 p-3' alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Drink!!!</h2>
                    <p>A popular drink made from soybeans that are soaked, ground</p>
                    
                </div>
             </div>
             
             </div>

           </div>
           
        </div>
    );
};

export default Home;