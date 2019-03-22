import React from 'react';
import ReactDOM from 'react-dom';

function Joke(props) {
   return (
      <div style = {{ color: !props.question && "#888888" }}>
         <h3> 
            Question: {props.question} 
         </h3>
         <h3> Answer: {props.answer} </h3>
      </div>
   )
}

export default Joke;