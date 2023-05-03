import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chefs = ({chef}) => {
    console.log(chef);
    const {id, chef_name,years_of_experience, num_of_recipes,likes,chef_picture}=chef;
    return (
        <div>
           <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={chef_picture} alt="chef" className="rounded-xl w-full h-72" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">{chef_name}</h2>
                    <p className='text-xl font-semibold'>Experience: {years_of_experience}</p>
                    <p className='text-xl font-semibold'>Number of recipes: {num_of_recipes}</p>
                    <p className='inline-flex content-baseline'> <span className='text-xl font-semibold'>Likes: {likes}</span><FaHeart className='text-red-500 text-xl ms-1'></FaHeart></p>
                    <div className="card-actions">
                    <Link to={`/recipes/${id}`} className="btn btn-primary">View Recipes</Link>
                    </div>
                </div>
          </div>
        </div>
    );
};

export default Chefs;