import {Outlet} from "react-router-dom";
import {NotesNavbar} from "../routes/notes-navbar/notes-navbar.component";

export const Notes = () => {
    return <div>
        <NotesNavbar />
        <Outlet />
    </div>;
};