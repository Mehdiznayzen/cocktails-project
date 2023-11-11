import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from './loading';
import { Link } from 'react-router-dom';
import NotFoundPage from './notFoundPage';

function Home() {

    const [cocktails, setCocktails] = useState([])

    const [loading, setLoading] = useState(true)

    const [newCocktails, setNewCocktails] = useState([])


    // Fonction pour mettre les premieres donnes dans les deuxiemes donnes
    useEffect(() => {
        setNewCocktails(cocktails)
    }, [cocktails])


    // Function for fetch the data from the link api
    const fetchData = () => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s')
        .then((response) => {
            setCocktails(response.data.drinks)
            setLoading(false)
        })
        .catch((error) => {console.error(error);
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    // function to filter by name
    const handleInput = (event) => {
        const valueInput = event.target.value
        const filterCocktails = cocktails.filter(
            item => item.strGlass.includes(valueInput)
        )
        setNewCocktails(filterCocktails)
    }

    return (
        loading ? (<Loading/>) : 
        (
            <section className="grid items-center justify-center my-20 gap-6" style={{display:'flex',flexDirection:'column'}}>
                <div className="search-container grid bg-white gap-5 p-4 rounded-lg" style={{boxShadow:'1px 1px 10px green'}}>
                    <h4 className='text-lg font-bold tracking-widest text-green-700'>Search Your Favorite Cocktail</h4>
                    <input onInput={handleInput} type="text" name="" className='w-[600px] h-[37px] bg-blue-300 rounded-md px-3' id="" style={{border:'2px solid #000'}} />
                </div>
                <div className="cocktails grid gap-5">
                    <div className="title">
                        <h1 className='text-center text-4xl font-bold tracking-widest text-green-700'>Cocktails</h1>
                    </div>
                    <div className="cocktails-container" style={{display:'grid', gap:'10px', gridTemplateColumns:'repeat(3, 1fr)'}}>
                        {
                            
                            newCocktails.length == 0 ? 
                                <NotFoundPage/> :
                            newCocktails.map((item) => (
                                <div key={item.idDrink} className="single-cocktail rounded-xl bg-white" style={{border:'2px solid #000'}}>
                                    <div className="img-container">
                                        <img className='w-[300px]' style={{borderRadius:'10px 10px 0px 0px'}} src={item.strDrinkThumb} alt="" />
                                    </div>
                                    <div className="info-container px-7 py-2">
                                        <h1 className='font-bold text-3xl'>{item.strDrink}</h1>
                                        <h3 className='font-bold tracking-widest'>{item.strGlass}</h3>
                                        <p className='text-gray-500 font-semibold'>{item.strAlcoholic}</p>
                                        <button className='bg-green-700 text-white h-[30px] rounded-md w-[120px]'><Link to={`/cocktail/${item.idDrink}`}>Details</Link></button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        )
    )
}

export default Home