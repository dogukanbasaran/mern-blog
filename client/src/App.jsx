import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Posts from './pages/Posts'

import Header from "./components/Header"

const App = () => {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='sign-in' element={<SignIn/>}/>
      <Route path='sign-up' element={<SignUp/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='posts' element={<Posts/>}/>
    </Routes>
   </Router>
  )
}

export default App
