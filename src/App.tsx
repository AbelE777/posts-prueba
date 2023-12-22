import { useState } from "react";
// import reactLogo from './assets/react.svg'
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Favorites, Home, Posts } from "./pages";
import { Layout } from "./components";

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="favoritos" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
