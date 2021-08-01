import React from 'react'
import './searchBox.css'

const SearchBox = ({ type, placeholder, handleChange }) => {
  return (
    <div className="search-box">
      <input 
        className="search"
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBox
