import React from 'react'
import { Route, Routes as Router } from "react-router-dom"
import Home from './Home'
import Container from "./Container"

const Routes = () => {
  return (
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Container />}/>
      </Router>
  )
}

export default Routes