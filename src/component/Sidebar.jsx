import { Link } from "react-router-dom";
import logo from "../Assets/logo.jpg"
import Icons from "../Assets/Icons";

import "./Sidebar.scss";

function Sidebar() {
      const { Home, Trophy2, Users, Chart, Settings, Logout } = Icons;


    return (
        <nav>
            <div className="topItem">
                <img src={logo} alt="logo" />
                <span><h3>SpeakGenie</h3>Admin Panel</span>
            </div>
            <div className="menu">
                <Link to="/">
                    <div className="sidebarItem">
                        <Home className="icon" />
                        <span>Dashboard</span>
                    </div>

                </Link>
                <Link to="/leaderboard">
                    <div className="sidebarItem">
                        <Trophy2 className="icon" />
                        <span>Leaderboard</span>
                    </div>
                </Link>
                <Link to="/students">
                    <div className="sidebarItem">
                        <Users className="icon" />
                        <span>Students</span>
                    </div>
                </Link>
                <Link to="/analytics">
                    <div className="sidebarItem">
                        <Chart className="icon" />
                        <span>Analytics</span>
                    </div>
                </Link>
                <Link to="/settings"><div className="sidebarItem">
                    <Settings className="icon" />
                    <span>Settings</span>
                </div>
                </Link>

            </div>

            <div className="bottomItem">
                <div className="userLogo">
                    s
                </div>

                <span>
                    <h4>School Admin</h4>
                    <p className="user">School Admin</p>
                    <p className="userSchool">Greenwood Elementry</p>
                </span>
                <Logout className="logout-icon" />

            </div>


        </nav>
    );
}

export default Sidebar;
