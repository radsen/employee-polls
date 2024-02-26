import "./logout.css";

import { useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";

const Logout = () => {
    const user = useSelector(selectUser);

    const handleLogout = (e) => {
        e.preventDefault();
    };

    return(
        <div className="logout">
            <h1>
                Welcome <span className="user-name">{user.name}</span>
            </h1>
            <button className="logout-btn" onClick={ (e) => handleLogout(e) }>
                Logout
            </button>
        </div>
    );
};

export default Logout;