import React from 'react'

const SearchBox = ({ type, placeholder, handleChange }) => {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export default SearchBox
