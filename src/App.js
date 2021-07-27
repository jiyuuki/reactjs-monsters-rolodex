import React, { useState, useEffect } from 'react'
import CardList from './components/CardList/CardListContainer'

import './App.css'
// HOC Container ???

function App(props) {

    const [ bosses, setBosses ] = useState([])
    const [ searchField, setSearchField ] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(bosses => setBosses(bosses))
    },[])

    useEffect(() => {
        console.log(searchField)
    },[searchField])

    const searchBosses = (target) => {
        setSearchField({
            searchField: target.value
        })
    }
    return (
        <div className='App'>
            <input 
                type='search' 
                placeholder='Search Bosses' 
                onChange={
                    ({ target }) => {
                        searchBosses(target)
                    }
                } />
            <CardList bosses={bosses} />
        </div>
    )
}

export default App
