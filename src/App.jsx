import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Sidebar className="sidebar" />
            <Navbar className="navbar" />
        </div>
    );
}

export default App;
