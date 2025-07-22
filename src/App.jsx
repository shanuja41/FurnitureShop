import { useState } from 'react'
import './App.css'
import Home from './page/home';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/img-position" element={<ImagePosition />} /> */}
    </Routes>
      </>
  );
}

export default App;
