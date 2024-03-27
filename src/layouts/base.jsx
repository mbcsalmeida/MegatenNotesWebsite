import {Outlet} from "react-router-dom";
import {NavBar} from "../routes/navbar/navbar.component";

export const Base = () => {
    return <div>
        <NavBar>
            <Outlet />
        </NavBar>
    </div>;
};