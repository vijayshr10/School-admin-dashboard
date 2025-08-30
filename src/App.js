import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Sidebar from './component/Sidebar';
import Dashboard from "./component/Pages/Dashboard/Dashboard"
import Leaderboard from "./component/Pages/Leaderboard/Leaderboard"
import Students from "./component/Pages/Students/Students"
import Analytics from "./component/Pages/Analytics/Analytics"
import Settings from "./component/Pages/Settings/Settings"


function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
