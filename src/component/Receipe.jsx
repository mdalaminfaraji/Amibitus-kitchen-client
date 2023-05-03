import React from 'react';
import { FaStar, FaStarHalf, FaStarHalfAlt } from 'react-icons/fa';

const Receipe = ({receipe}) => {
    console.log(receipe);
    const {recipe_name, recipes_photo, rating, id,description}=receipe;
    return (
        <div className="card w-full h-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={recipes_photo} alt="Shoes" className="rounded-xl w-full h-72" />
  </figure>
  <div className="card-body items-center text-center ">
    <h2 className="card-title text-3xl ">{recipe_name}</h2>
    <p className='text-lg'>{description}</p>
    <p className='inline-flex text-lg'><span className='font-semibold me-2'>Ratting:</span><FaStar className='text-red-500 text-xl'></FaStar><FaStar className='text-red-500 text-xl'></FaStar><FaStar className='text-red-500 text-xl'></FaStar><FaStar className='text-red-500 text-xl'></FaStar><FaStarHalfAlt className='text-red-500 text-xl'></FaStarHalfAlt> <span className='font-semibold ms-2'>{rating}</span></p>
  </div>
</div>
    );
};

export default Receipe;