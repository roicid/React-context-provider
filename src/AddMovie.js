import React , {useState, useContext} from 'react'
import Movie from './Movie';
import {MovieContext} from './MovieContext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price , setPrice] = useState('');
    const [movies, setMovies] =useContext(MovieContext);


    const updateName = e => {
        setName(e.target.value);
    }

    const updatePrice = e => {
        setPrice(e.target.value);
    }

    const  addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies =>  [...prevMovies, {name:name ,price:price }])
    }

    return ( 
     <div className="submitNewMovie" > 
        <form onSubmit={addMovie} className="form" > 
           <p> Insert New Movie</p>
          <input type="text" name="name" value={name} onChange={updateName} />    
          <p> Insert New Movie Price</p>
          <input type="text" name="price" value={price}  onChange={updatePrice}/> 
          <button> Submit </button>
        </form>
    </div>
    )
}

export default AddMovie;