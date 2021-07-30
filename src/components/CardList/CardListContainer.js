import React, { useState, useEffect } from 'react'
import CardList from './CardList'
import SearchBox from '../SearchBox/SearchBox'

const CardListContainer = () => {
  const [ bosses, setBosses ] = useState([])
  const [ searchField, setSearchField ] = useState('')

  const handleChange = ({ target }) => {
    setSearchField(target.value)
    setBosses(bosses.filter((bosse) => bosse.name.toLowerCase().includes(searchField.toLocaleLowerCase())))
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(bosses => setBosses(bosses))
    },3000)
  },[])
 
  return [
    <SearchBox type={'search'} placeholder={'Search box'} handleChange={({ target }) => handleChange({ target }) } />,
    <CardList bosses={bosses}/>
  ]

}

export default CardListContainer
