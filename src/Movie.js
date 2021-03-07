import React  from 'react';

const Movie = ({name, price}) => {
    
        
        return(

          <div className="moviecard" >

          <h3> Name : {name}</h3>
          <h3>  ${price}</h3>

         </div> 
                  
         
           
           );
}

export default Movie;  