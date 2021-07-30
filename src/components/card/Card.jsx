import React from 'react'
import './card.css'

const Card = ({ bosse }) => {
  return (
    <div className='card-container' key={bosse.id}>
      <img 
        alt={bosse.name} 
        src={`https://robohash.org/${bosse.id}?set=set2`} 
      />
      <h1> 
        {bosse.name}
      </h1>
      <p>
        {bosse.email}
      </p>
    </div>
  )
}

export default Card
