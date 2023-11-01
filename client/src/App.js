import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import FitToPlay from "./pages/FitToPlay";
import Player from "./pages/Player+";
import PhysioConnect from "./pages/PhysioConnect";
import Products from "./pages/Products";
import FooterNav from "./components/FooterNav";

function App() {
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  return (
    <div>
      {isLoginClicked ? (
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                isLoginClicked={isLoginClicked}
                setIsLoginClicked={setIsLoginClicked}
              />
            }
          />
        </Routes>
      ) : (
        <>
          <Navbar
            isLoginClicked={isLoginClicked}
            setIsLoginClicked={setIsLoginClicked}
          />
          <Routes>
            <Route
              path="/"
              element={<Home setIsLoginClicked={setIsLoginClicked} />}
            />
            <Route path="/fit-to-play" element={<FitToPlay />} />
            <Route path="/player+" element={<Player />} />
            <Route path="/physioconnect" element={<PhysioConnect />} />
            <Route path="/products" element={<Products />} />
          </Routes>
          <FooterNav />
        </>
      )}
    </div>
  );
}

export default App;
