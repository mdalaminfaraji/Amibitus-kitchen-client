import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import Chefs from './Chefs';

const Home = () => {
    const chefData=useLoaderData();

    // console.log(chefData);
    return (
        <div className='bg-slate-200'>
            <div className=' my-container' >
                <Banner></Banner>
            </div>
             <h1 className='text-center text-4xl font-semibold'>Our Experts Chefs</h1>
            <div className='my-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    chefData.map(chef=><Chefs key={chef.id} chef={chef}></Chefs>)
                }
            </div>
            
        </div>
    );
};

export default Home;