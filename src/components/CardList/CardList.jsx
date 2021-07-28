import React from 'react'
import './cardList.style.css'
import Card from '../card/Card'

export default (props) => (
  <div className='App'>
    <div className='card-list'>
      {
        props.bosses.map(bosse => (
          <Card bosse={bosse} key={bosse.id} />
        ))
      }
    </div>
  </div>
)
