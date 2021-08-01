import React, { useState, useEffect } from 'react'
import CardList from './CardList'
import SearchBox from '../SearchBox/SearchBox'

const CardListContainer = () => {
  const [ bosses, setBosses ] = useState([])
  const [ searchField, setSearchField ] = useState('')

  const filterBosses = () => {
    return bosses.filter((bosse) => bosse.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
  } 

  const handleChange = (value) => {
    setSearchField(value)
  }

  console.log({
    log: 'bosses',
    bosses: bosses,
    filterBosses: filterBosses()
  })

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(bosses => setBosses(bosses))
    },300)
  },[])
  
  return [
    <h1 className="title">Bosses Rolodex</h1>,
    <SearchBox type={'search'} placeholder={'Search box'} handleChange={({ target }) => handleChange(target.value) } />,
    <CardList bosses={filterBosses()}/>
  ]

}

export default CardListContainer
