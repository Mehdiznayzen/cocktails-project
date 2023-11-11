import React, { useEffect, useState } from 'react'
import Loading from './loading'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

// The link of search the cocktail with his id
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

function SingleCocktail() {
    // useParams we use it for get the id of cocktail clicked
    const { idDrink } = useParams()

    const [loading, setLoading] = useState(true)

    const [cocktail, setCocktail] = useState([])

    useEffect(() => {
        async function getCocktail(){
            axios.get(`${url}${idDrink}`)
            .then((response) => {
                setCocktail(response.data.drinks)
                console.log(response.data.drinks)
                setLoading(false)
            })
        }
        getCocktail()
    }, [idDrink])

    return (
        loading ? (<Loading/>) :
        (
            cocktail.map((item) => (
                <section className='grid items-center justify-center my-16 gap-4'>
                    <div className="link-back-home text-center">
                        <button className='bg-green-900 text-white w-[160px] h-[40px] rounded-lg tracking-widest'>
                            <Link to={'/'}>Back Home</Link>
                        </button>
                    </div>
                    <div key={item.idDrink} className="cocktail-container gird items-center justify-center">
                        <div className="title cocktail text-center">
                            <h1 className='text-4xl tracking-widest font-bold'>{item.strDrink}</h1>
                        </div>
                        <div className="info-img-container flex items-center gap-5">
                            <div className="img-container">
                                <img className='w-[350px] rounded-lg' style={{border:'4px solid green'}} src={item.strDrinkThumb} alt="" />
                            </div>
                            <div className="info-container grid gap-3">
                                <div className="name flex gap-4">
                                    <label htmlFor="" className='font-semibold tracking-widest p-1 rounded-lg' style={{background:'#B0FC74'}}>Name : </label>
                                    <p className='font-bold tracking-widest text-base'>{item.strDrink}</p>
                                </div>
                                <div className="name flex gap-4">
                                    <label htmlFor="" className='font-semibold tracking-widest p-1 rounded-lg' style={{background:'#B0FC74'}}>Category : </label>
                                    <p className='font-bold tracking-widest text-base'>{item.strCategory}</p>
                                </div>
                                <div className="name flex gap-4">
                                    <label htmlFor="" className='font-semibold tracking-widest p-1 rounded-lg' style={{background:'#B0FC74'}}>Info : </label>
                                    <p className='font-bold tracking-widest text-base'>{item.strAlcoholic}</p>
                                </div>
                                <div className="name flex gap-4">
                                    <label htmlFor="" className='font-semibold tracking-widest p-1 rounded-lg' style={{background:'#B0FC74'}}>Glass : </label>
                                    <p className='font-bold tracking-widest text-base'>{item.strGlass}</p>
                                </div>
                                <div className="name flex items-center gap-4">
                                    <label htmlFor="" className='font-semibold tracking-widest p-1 rounded-lg' style={{background:'#B0FC74'}}>Instructions : </label>
                                    <p className='font-bold tracking-widest text-base w-[400px]'>{item.strInstructions}</p>
                                </div>
                                <div className="name flex gap-4">
                                    <label htmlFor="" className='font-semibold tracking-widest p-1 rounded-lg' style={{background:'#B0FC74'}}>Ingredients : </label>
                                    <p className='font-bold tracking-widest text-base'>{item.strIngredient2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))
        )
    )
}

export default SingleCocktail