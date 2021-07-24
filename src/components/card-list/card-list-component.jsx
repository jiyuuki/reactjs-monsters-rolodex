import React from 'react'
import Card from '../card/card-component'

import './card-list.style.css'

const CardList = (props) => (

    <div className='card-list'>
        {
            props.bosses.map(bosse => (
               <Card bosse={bosse} key={bosse.id} />
            ))
        }
    </div>

)

export default CardList
