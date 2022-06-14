import React, { useState } from 'react'
import { useResultsContext } from '../context/ResultsContextProvider';
import { useLocation } from 'react-router-dom';

const Home = () => {
  let [ text, setText ] = useState()
  const { searchTerm, setSearchTerm } = useResultsContext()
  let result = ""
  const location = useLocation()
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h1 className='text-5xl mb-6'>Gogole</h1>
      <form
        onSubmit={(e) => {e.preventDefault();  setSearchTerm(result); console.log(searchTerm); location.pathname = "/search";}}
        className='flex border-2 w-96 overflow-hidden rounded-full border-zinc-400'>
        <input
        onChange={(e) => { result = e.target.value }}
        className='block border-none text-lg bg-gray-200 p-4 w-10/12 outline-none dark:bg-zinc-800' type="search" />
        <button className='block p-4 w-2/12 flex justify-center items-center bg-blue-300 dark:bg-zinc-500'>🔎</button>
      </form>
    </div>
  )
}

export default Home