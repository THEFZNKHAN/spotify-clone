import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import "./App.css";
import SongBar from "./components/songBar/SongBar";

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar className="sidebar" />
                <Navbar className="navbar" />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
            </Routes>
            <SongBar className="songBar" />
        </Router>
    );
}

export default App;
