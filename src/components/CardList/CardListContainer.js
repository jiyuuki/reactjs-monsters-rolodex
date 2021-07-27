import React, { useState, useEffect } from 'react'
import CardList from './CardList'

function CardListContainer () {
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

    // const searchBosses = (target) => {
    //     setSearchField({
    //         searchField: target.value
    //     })
    // }

    return (
        <CardList bosses={bosses} />
    )
}
export default CardListContainer;
