import React, { useState, useEffect } from 'react'
import CardList from './CardList'

const CardListContainer = () => {
  const [ bosses, setBosses ] = useState([])

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(bosses => setBosses(bosses))
    },3000)
  },[])
 
  return [
    <CardList bosses={bosses}/>
  ]

}

export default CardListContainer
