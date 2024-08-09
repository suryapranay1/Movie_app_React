import React from "react";
import Header from "./components/Header/header";
import "./App.css";
import SimpleBottomNavigation from "./components/bottomnav";
import { Container } from "@mui/material";

import { Route, Routes } from "react-router-dom";
import Movies from "./components/pages/movies/movies";
import Series from "./components/pages/series/series";
import Search from "./components/pages/search/search";
import Trending from "./components/pages/trending/trending";
const App = () => {
  return (
    <>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} exact></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/series" element={<Series />}></Route>
            <Route path="/search" element={<Search />}></Route>
          </Routes>
        </Container>
      </div>

      <SimpleBottomNavigation />
    </>
  );
};

export default App;
