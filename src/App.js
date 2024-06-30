import React, { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomePage from './Pages/HomePage';

export default function App() {
  useEffect(() => {document.body.style.backgroundColor = '#E8E5E5'})

  return (
    <>
       <HomePage />
    </>
  );
}






