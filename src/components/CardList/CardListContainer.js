import React, { useState, useEffect } from 'react'
import CardList from './CardList'

const CardListContainer = () => {
  const [ bosses, setBosses ] = useState([])
  const [ searchField, setSearchField ] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(bosses => setBosses(bosses))
  },[])

  return (
    <CardList bosses={bosses} />
  )
}

export default CardListContainer
