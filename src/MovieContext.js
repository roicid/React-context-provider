
import React , {useState, createContext} from 'react';


 export const MovieContext = createContext();

 export const MovieProvider = props => {

    const [movies, setMovies] = useState([{
        name : 'Harry potter',
        price : '10',
        id: 23432
        },
        {
          name: 'Games of thrones',
          price: '10',
          id : 323432
        },
        {
          name : 'Inception',
          price: '10',
          id: 234323
        }])

    return( 

        <MovieContext.Provider value = {[movies , setMovies]}>

          {props.children}

        </MovieContext.Provider>


    )
}