import React, { useState } from 'react'
import { useResultsContext } from '../context/ResultsContextProvider'


const Search = () => {
  const { searchTerm, setSearchTerm } = useResultsContext()
  const [ text, setText ] = useState(searchTerm)
  return (
    <form 
      onSubmit={(e) => { e.preventDefault(); setSearchTerm(text) }}
      className="block my-2 w-full"  
    >
    <input
      className='bg-transparent dark:border-zinc-700 dark:text-white block w-96 my-4 mx-auto border-2 rounded-full outline-none py-2 px-6 text-lg sm:absolute sm:top-2 sm:m-0 sm:right-1/2 sm:translate-x-1/2 md:translate-x-1/4 md:w-3/6'
      type="search"
      placeholder='Enter search term here.'
      value={text}
      onChange={(e) => { setText(e.target.value) }}
    />
    </form>
  )
}

export default Search