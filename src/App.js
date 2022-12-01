import React from "react";
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import Lucky from "./pages/Lucky";

function App(){
  return (
    <div>
      <header>
        <h1>
          Maurene Goo
        </h1>
      </header>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Lucky 📷</Link></li>
          <li><Link to="/isso-que-a-gente-chama-de-amor">Desi Lee 📒</Link></li>
        </ul>
      </nav>
      <main className="content">
        <Routes>
          <Route path="/" element={<Lucky/>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
