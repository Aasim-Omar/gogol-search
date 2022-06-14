import React, { useContext, createContext, useState } from 'react'

const ResultsContext = createContext()

export const ResultsContextProvider = ({ children }) => {
  let [results, setResults] = useState([])
  let [searchTerm, setSearchTerm] = useState("")
  let [isLoading, setIsLoading] = useState(true)

  const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'
  const getResults = async (query) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${query}`, {
      method: "GET",
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
        'X-RapidAPI-Key': 'f97919cdbemsh2e49056e2c89dccp170344jsn7ce3b82e00e0'
      }
    });
    const data = await response.json();
    setResults(data)
    setIsLoading(false);
  };

  return (
    <ResultsContext.Provider
      value={{results, getResults, setResults, searchTerm, setSearchTerm, isLoading, setIsLoading}}
    >
      { children }
    </ResultsContext.Provider>
  )
}

export const useResultsContext = () => useContext(ResultsContext)
