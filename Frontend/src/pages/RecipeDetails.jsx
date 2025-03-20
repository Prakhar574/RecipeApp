import React from 'react';
import profileImg from '../assets/profile.png';
import { useLoaderData } from 'react-router-dom';
import '../components/recipedetails.css' // Import the new unique CSS

export default function RecipeDetails() {
    const recipe = useLoaderData();
    console.log(recipe);

    return (
        <>
            <div className='recipe-details-container'>
                {/* 🔥 Profile Section */}
                <div className='recipe-profile'>
                    <img src={profileImg} alt="User Profile" className='recipe-profile-img' />
                    <h5 className='recipe-user-email'>{recipe.email}</h5>
                </div>

                {/* 🔥 Recipe Title */}
                <h3 className='recipe-title'>{recipe.title}</h3>

                {/* 🔥 Recipe Image */}
                <img src={`http://localhost:5000/images/${recipe.coverImage}`} alt="Recipe" className='recipe-cover-img' />

                {/* 🔥 Recipe Content */}
                <div className='recipe-content'>
                    <div className='recipe-ingredients'>
                        <h4>Ingredients</h4>
                        <ul>
                            {recipe.ingredients.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='recipe-instructions'>
                        <h4>Instructions</h4>
                        <span>{recipe.instructions}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
