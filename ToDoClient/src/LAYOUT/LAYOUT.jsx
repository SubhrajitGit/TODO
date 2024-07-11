import React from 'react'
import Header from './HEADER'
import Footer from './FOOTER'
import {Toaster} from "react-hot-toast"

const LAYOUT = ({children}) => {
  return (
    <>
     <Header/>
     {children}
     <Toaster/>
     <Footer/> 
    </>
  )
}

export default LAYOUT
