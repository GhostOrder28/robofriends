import React from 'react'

const SearchBox = (props) => {
  return (
    <>
      <input
        type='search'
        placeholder='Search robots'
        onChange={props.onSearchChange}
        className='pa3 ba b--green bg-lightest-blue'
      />
    </>
  )
}

export default SearchBox;
