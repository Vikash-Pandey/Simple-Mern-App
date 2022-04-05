import React from 'react'

import Home from './component/Home/Home'
import Header from './component/Header/Header'
import Form from "./component/form/Form"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <>



     <Header/>
<Home/>

    </>
  )
}

export default App