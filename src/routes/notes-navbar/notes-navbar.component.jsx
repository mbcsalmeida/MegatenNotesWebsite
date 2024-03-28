import {Fragment} from "react";
import {titles} from "../titles";
import TopBar from "../topbar/topbar.component";


export const NotesNavbar = ({children}) => {
    return <Fragment>
        <NotesNavbarMenu />
        {children}
    </Fragment>
}

const NotesNavbarMenu = () => {
    return <TopBar titles={titles} />
}

