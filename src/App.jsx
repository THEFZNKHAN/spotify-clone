import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import "./App.css";
import SongBar from "./components/songBar/SongBar";

function App() {
    return (
        <Router>
            <Sidebar className="sidebar" />
            <Routes>
                <Route path="/spotify-clone" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} className="home"/>
                <Route path="/search" element={<Search />} />
            </Routes>
            <SongBar className="songBar" />
        </Router>
    );
}

export default App;
