import React from 'react'
import './card.style.css'

export default(props) => (
  <div className='card-container' key={props.bosse.id}>
    <img 
      alt={props.bosse.name} 
      src={`https://robohash.org/${props.bosse.id}?set=set2`} 
    />
    <h1> 
      {props.bosse.name}
    </h1>
    <p>
      {props.bosse.email}
    </p>
  </div>
)
