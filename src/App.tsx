import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddBookPage from "./pages/AddBookPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddBookPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
