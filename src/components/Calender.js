import React from 'react';
import Calendar from 'react-calendar';

//What is life about?

export default  Example (props){
    //export state to parent components

    const {date,setDate} = props;


    return( 
          
        Example on
          onChange={(date) => setDate(date)}
    )
       
      
  }
}

