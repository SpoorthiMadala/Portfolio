import React,{ useState } from 'react'
import {Portfolio} from './Portfolio';
import { ThemeProvider } from './Portfolio'; 
import './App.css'


function App() {
  
  return (
    <>
    <ThemeProvider>
      
        <Portfolio />
      
    </ThemeProvider>
    </>
  )
}

export default App;
