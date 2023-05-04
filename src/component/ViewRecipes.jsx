import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import ChefRecipes from './ChefRecipes';
import { LazyLoadImage } from "react-lazy-load-image-component";

const ViewRecipes = () => {
    const chefData=useLoaderData();
    const {id, chef_name, years_of_experience, num_of_recipes, likes,bio, chef_picture, recipes}=chefData.chef;
    console.log(chefData.chef);
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-3 drop-shadow-md  md:h-96  p-8 bg-gradient-to-r from-indigo-100 from-10% via-sky-200 via-30% to-emerald-300 to-90%'>
           <div className='rounded'>
            <LazyLoadImage src={chef_picture} className='w-96 drop-shadow-lg max-h-80 rounded-md mx-auto'/>
           </div>
           <div className='border-double drop-shadow-lg p-3 border-4 border-sky-500 mt-3 md:mt-0'>
            <h1 className='text-4xl font-semibold '>Welcome <br/> <span>I am {chef_name}</span></h1>
            <h3 className='text-xl font-medium p-1'>My Experience :{years_of_experience} years</h3>
            <h4 className='text-xl font-medium p-1'> Number of recipes: {num_of_recipes}</h4>
            <h5 className='text-xl font-medium p-1'>Likes: {likes}</h5>
            <h6 className='text-xl font-medium p-1'>Short bio: {bio.slice(0, 150)} .....</h6>

           </div>
        </div>
             
             <div className='bg-slate-200 pt-10'>
                <h1 className='text-center text-4xl font-bold p-4'>Chef's Recipes</h1>
                <div className='my-container grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        recipes.map(recipe=><ChefRecipes key={recipe.id} recipes={recipe}></ChefRecipes>)
                    }
                </div>
             </div>

        </>
    );
};

export default ViewRecipes;