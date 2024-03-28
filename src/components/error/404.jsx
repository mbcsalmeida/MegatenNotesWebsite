import {NavLink} from "react-router-dom";

export const Page404 = () => {
    return <div>
        <h1>It seems you are searching for a page that doesn't exist.</h1>
        <NavLink to='/'>Please return to the homepage.</NavLink>
    </div>
}