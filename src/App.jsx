import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./component/header/header"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header/>}/>
    </Routes>
  )
}