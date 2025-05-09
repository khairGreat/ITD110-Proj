import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  WelcomePage,
  AboutUsPage,
  LoginPage,
  SignUpPage,
  HomePage,  ProfilePage, UserRootPage, UserWelcomingPage, RecipeMenuPage
} from './pages/pageRegistry.js';




function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Profile routes */}
        <Route path="/user" element={<UserRootPage/>}>
          <Route path="home" element={<UserWelcomingPage />} />
          <Route path="recipe" element={<RecipeMenuPage />} />
          <Route path='profile' element = {<ProfilePage/>}/>
        </Route>

      </Routes>
    </Router>
    
  );
}

export default App;
