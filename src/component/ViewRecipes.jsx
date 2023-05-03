import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewRecipes = () => {
    const chefData=useLoaderData();
    const {id, chef_name, years_of_experience, num_of_recipes, likes,bio, chef_picture, recipes}=chefData.chef;
    console.log(chefData.chef);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-3  h-96 p-8 bg-gradient-to-r from-indigo-100 from-10% via-sky-200 via-30% to-emerald-300 to-90%'>
           <div className='rounded'>
            <img src={chef_picture} className='w-96 h-full rounded-md mx-auto'/>
           </div>
           <div className='border-double drop-shadow-lg p-3 border-4 border-sky-500'>
            <h1 className='text-4xl font-semibold '>Welcome <br/> <span>I am {chef_name}</span></h1>
            <h3 className='text-xl font-medium p-1'>My Experience :{years_of_experience} years</h3>
            <h4 className='text-xl font-medium p-1'> Number of recipes: {num_of_recipes}</h4>
            <h5 className='text-xl font-medium p-1'>Likes: {likes}</h5>
            <h6 className='text-xl font-medium p-1'>Short bio: {bio.slice(0, 150)} .....</h6>

           </div>
        </div>
    );
};

export default ViewRecipes;