import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {Base} from "../layouts/base";
import {Notes} from "../layouts/notes";
import {MainContainer} from "../routes/container/container.component";
export default function Router() {

    const router = createBrowserRouter([
        {
            path: "/", element: <Base/>, children: [
                {path: "/", element: <MainContainer pageURL={"main/home.md"} />},
                {path: "/home", element: <MainContainer pageURL={"main/home.md"} />},
                {path: "/about", element: <MainContainer pageURL={"main/about.md"} />},
                {path: "/games", element: <MainContainer pageURL={"main/games.md"} />},
                {path: "/credits", element:  <MainContainer pageURL={"main/credits.md"} />},
                {path: "/checklist", element: <MainContainer pageURL={"main/checklist.md"} />},
            ]
        },
        {
            path: "/", element: <Notes/>, children: [
                {path: "/notes/smt1", element: <MainContainer pageURL={"notes/smt1.md"} />},
                {path: "/notes/ab", element: <MainContainer pageURL={"notes/ab.md"} />},
                {path: "/notes/devsum", element: <MainContainer pageURL={"notes/devsum.md"} />},
                {path: "/notes/fire", element: <MainContainer pageURL={"notes/fire.md"} />},
                {path: "/notes/lb2gbc", element: <MainContainer pageURL={"notes/lb2gbc.md"} />},

            ]
        },
        {path: "*", element: <Navigate to={"/"}/>} //change to not found
    ])

    return <RouterProvider router={router}/>

}