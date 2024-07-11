import React from 'react'
import Card from './PAGES/Card'
import Home from './PAGES/Home'
import CreateTodoForm from './PAGES/CreateTodoForm'
import {Routes,Route} from "react-router-dom"
import Features from "./PAGES/FeaturesPage"
import About from "./PAGES/AboutPage"
import Contact from "./PAGES/ContactPage"
import CreateTodo from "./PAGES/CreateTodoForm"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/create" element={<CreateTodo/>}/>
      </Routes>
    </>
  )
}

export default App
