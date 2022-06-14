import React from 'react'
import { Route, Routes as Router, Navigate } from "react-router-dom"
import Home from './Home'
import Results from "./Results"

const Routes = () => {
  return (
    <div className='p-8'>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Results />}/>
      </Router>
    </div>
  )
}

export default Routes