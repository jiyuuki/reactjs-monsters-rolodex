import React from 'react'
import Card from '../card/card-component'

import './cardList.style.css'

const CardList = (props) => (
    <div className='App'>
        {/* <input 
            type='search' 
            placeholder='Search Bosses' 
            onChange={
                ({ target }) => {
                    searchBosses(target)
                }
        } /> */}
        <div className='card-list'>
            {
                props.bosses.map(bosse => (
                <Card bosse={bosse} key={bosse.id} />
                ))
            }
        </div>
    </div>
)

export default CardList