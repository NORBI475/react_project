import { useState } from 'react'
import { Router, Route, Routes } from 'react-router-dom'

//Blok
import Nav from './components/Pages/Main_Pages/Nav/Nav'
import MainPages from './components/Pages/Main_Pages/MainPages'
import Onac from './components/Pages/Onac/Onac'
import Footer from './components/Pages/Main_Pages/Footer/Footer'
import Blog from './components/Pages/Blog/Blog'
import Gastro from './components/Pages/Gastro_Chop/Gastro'
import Lanch from './components/Pages/Biznec_Lanch/Lanch'
import Page_Gastro from './components/Pages/Gastro_Chop/Page/Page_Gastro'
import Chat from './components/Pages/Main_Pages/Chat/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Nav/>
    <Chat/>
    <Routes>
        <Route index element={<MainPages/>}/>
        <Route path='/MainPages' element={<MainPages/>}/>
        <Route path='/Onac' element={<Onac/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Gastro' element={<Gastro/>}/>
        <Route path='/Lanch' element={<Lanch/>}/>
        <Route path='/Page_Gastro' element={<Page_Gastro/>}/>
        
    </Routes>
    <Footer/>
    </>
  )
}

export default App

