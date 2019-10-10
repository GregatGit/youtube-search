import React, { useState } from 'react'

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('')
  
  const handleChange = e => {
    setTerm(e.target.value)
  }

  const formSubmit = e => {
    e.preventDefault()
    onFormSubmit(term)
  }


    return (
      <div className=" search-bar ui segment">
        <form onSubmit={formSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              onChange={handleChange}
              type="text"
              value={term}
            />
          </div>
        </form>
      </div>
    )
}

export default SearchBar
