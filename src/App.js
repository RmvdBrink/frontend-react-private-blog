import React from 'react';
import './App.css';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import BlogOverzicht from "./pages/blog-overzicht-pagina/Blog-overzicht";
import BlogPosts from "./pages/blog-posts/Blog-posts"
import { Route, Routes } from "react-router-dom";
import Navigation from './components/navigation/Navigation';

function App() {
  // // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  // const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <div>
        <Navigation/>
        <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/BlogPosts" element={<BlogPosts/>}/>
    <Route path="/BlogOverzicht" element={<BlogOverzicht/>}/>
        </Routes>

    </div>
  );
}

export default App;
