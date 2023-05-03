import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewRecipes = () => {
    const chefData=useLoaderData();
    console.log(chefData);
    return (
        <div>
            <h1>view recipes page</h1>
        </div>
    );
};

export default ViewRecipes;