import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/addrecipe.css' 

export default function AddFoodRecipe() {
    const [recipeData, setRecipeData] = useState({})
    const navigate = useNavigate()

    const onHandleChange = (e) => {
        let val = e.target.name === "ingredients" 
            ? e.target.value.split(",") 
            : e.target.name === "file" 
            ? e.target.files[0] 
            : e.target.value

        setRecipeData(prev => ({ ...prev, [e.target.name]: val }))
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault()
        console.log(recipeData)
        await axios.post("http://localhost:5000/recipe", recipeData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'authorization': 'bearer ' + localStorage.getItem("token")
            }
        })
            .then(() => navigate("/"))
    }

    return (
        <>
            <div className='recipe-container'>
                <h2 className='recipe-title'>Add New Recipe</h2>
                <form className='recipe-form' onSubmit={onHandleSubmit}>
                    
                    <div className='recipe-group'>
                        <label>Title</label>
                        <input type="text" className='recipe-input' name="title" onChange={onHandleChange} />
                    </div>

                    <div className='recipe-group'>
                        <label>Time</label>
                        <input type="text" className='recipe-input' name="time" onChange={onHandleChange} />
                    </div>

                    <div className='recipe-group'>
                        <label>Ingredients</label>
                        <textarea className='recipe-textarea' name="ingredients" rows="5" onChange={onHandleChange}></textarea>
                    </div>

                    <div className='recipe-group'>
                        <label>Instructions</label>
                        <textarea className='recipe-textarea' name="instructions" rows="5" onChange={onHandleChange}></textarea>
                    </div>

                    <div className='recipe-group'>
                        <label>Recipe Image</label>
                        <input type="file" className='recipe-file' name="file" onChange={onHandleChange} />
                    </div>

                    <button type="submit" className='recipe-submit'>Add Recipe</button>
                </form>
            </div>
        </>
    )
}
