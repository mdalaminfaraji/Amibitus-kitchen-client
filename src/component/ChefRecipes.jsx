import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
const ChefRecipes = ({recipes}) => {
    const [Disable, setDisable]=useState(false);
    const notify = () =>{
        toast("Wow you add successfully!" );
        setDisable(true);
    }
    console.log(recipes);
    const {id, recipe_name,recipes_photo,cooking_method,rating,ingredients }=recipes;
   
    return (
        <div className="card card-side bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-2">
            <figure><LazyLoadImage src={recipes_photo} className='h-full w-full p-4 rounded-lg' alt="photo"/></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-semibold">{recipe_name}</h2>
                <p className='font-semibold'>Cooking Method:</p>
                <p>{cooking_method.substring(0,100)}...<button className='bg-cyan-300 rounded-lg p-1 text-sm font-semibold'>Show More</button></p>
                <p className='font-semibold'>Ingredients List:</p>
                <p>1.{ingredients[0]} 2.{ingredients[1]}<br/> 3.{ingredients[2]} 4. {ingredients[3]}<br/>5.{ingredients[4]}</p>
                <p className='inline-flex'><span className='text-xl font-semibold'>Rating: </span> <FaStar className='text-red-500 text-xl'></FaStar><FaStar className='text-red-500 text-xl'></FaStar><FaStar className='text-red-500 text-xl'></FaStar><FaStar className='text-red-500 text-xl'></FaStar> <FaStarHalfAlt className='text-red-500 text-xl'></FaStarHalfAlt> {rating}</p>
                <div className="card-actions justify-end">
                <button onClick={notify}  disabled={Disable}  className="btn btn-primary">Favorite button</button>
                <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;