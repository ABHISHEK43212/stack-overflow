import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homes from './Page/Homes/Homes'
import Auth from './Page/Auth/Auth'
import Question from './Page/Question/Question'
import AskQuestion from './Page/AskQuestion/AskQuestion'
import DisplayQuestion from './Page/Question/DisplayQuestion'
import Tags from './Page/Tags/Tags'
import Users from './Page/Users/Users'
import Userprofile from './Page/UserProfile/Userprofile'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homes />}/>
        <Route path='/Auth' element={<Auth />}/>
        <Route path='/Question' element={<Question />}/>
        <Route path='/AskQuestion' element={<AskQuestion />}/>
        <Route path='/Questions/:id' element={<DisplayQuestion/>}/>
        <Route path='/Tags' element={<Tags />}/>
        <Route path='/Users' element={<Users />}/>
        <Route path='/Users/:id' element={<Userprofile />}/>
    </Routes>
  )
}

export default AllRoutes
