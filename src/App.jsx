import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import AllMentors from './Components/AllMentors'
import Footer from './Components/Footer'
import Profile from './Components/Profile'
import Calender from './Components/Calender'
import MySessions from './Components/MySessions'
import Error from './Components/Error'
import Services from './Components/Services'



const App = () => {
 

  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar />


      

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/allmentors' element={<AllMentors />} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='/test' element={<Calender />} />
            <Route path='/sessions' element={<MySessions />} />
            <Route path='/services' element={<Services />} />
            <Route path='*' element={<Error />} />
        </Routes>


        <Footer />
    </div>
  )
}

export default App