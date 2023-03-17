import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./Component/homepage/homepage";
import SearchResultPage from "./Component/searchresultpage/searchresultpage";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchresult" element={<SearchResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
