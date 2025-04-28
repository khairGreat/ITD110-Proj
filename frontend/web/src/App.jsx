import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { 
  WelcomePage, AboutUsPage, LoginPage, SignUpPage, HomePage
  
} from './pages/pageRegistry.js'



function App() {

  
  return (
    <>
      <Router>
        <Routes>
          
          <Route path='/' element={<WelcomePage/> }/>
          <Route path='/home' element={<HomePage/>}/> 
          <Route path='/about' element={<AboutUsPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        
        </Routes>
      </Router>
    </>
  )
}

export default App
