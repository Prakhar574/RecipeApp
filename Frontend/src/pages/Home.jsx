import React, { useState } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItems from '../components/RecipeItems'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import InputForm from '../components/InputForm'

export default function Home() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const addRecipe = () => {
        let token = localStorage.getItem("token")
        if (token)
            navigate("/addRecipe")
        else {
            setIsOpen(true)
        }
    }

    return (
        <>
            <section className='home'>
                <div className='left'>
                    <h1>Welcome to Recipe Dekho</h1>
                    <h3 >Find, share, and enjoy delicious recipes from around the world,Cook delicious meals with simple step-by-step instructions.</h3>
                    <button onClick={addRecipe}>Share your recipe</button>
                </div>
        
            </section>
            
         
            {(isOpen) && <Modal onClose={() => setIsOpen(false)}><InputForm setIsOpen={() => setIsOpen(false)} /></Modal>}
            <div className='recipe'>
                <RecipeItems />
            </div>
            <section className="testimonials">
    <h2 className="h3">What Our Food Lovers Say</h2>
    <div className="testimonials-cards">
        <div className="testimonial">
            <p>"The recipes here are simply amazing! I found my new favorite dish."</p>
            <span>- Prakhar Katiyar</span>
        </div>
        <div className="testimonial">
            <p>"Easy-to-follow recipes and delicious results every time!"</p>
            <span>- Puneet Katiyar</span>
        </div>
        <div className="testimonial">
            <p>"A perfect place for food lovers! So many unique and tasty dishes."</p>
            <span>- Prajwal Gautam</span>
        </div>
    </div>
</section>

        </>
    )
}
