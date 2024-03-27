import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {Base} from "../layouts/base";
import {Notes} from "../layouts/notes";
import {MainContainer} from "../routes/container/container.component";
export default function Router() {

    const router = createBrowserRouter([
        {
            path: "/", element: <Base/>, children: [
                {path: "/", index:true, element: <MainContainer pageURL={"main/home.md"} />},
                {path: "/home", element: <MainContainer pageURL={"main/home.md"} />},
                {path: "/about", element: <MainContainer pageURL={"main/about.md"} />},
                {path: "/games", element: <MainContainer pageURL={"main/notes.md"} />},
                {path: "/credits", element:  <MainContainer pageURL={"main/credits.md"} />},
                {path: "/checklist", element: <MainContainer pageURL={"main/checklist.md"} />},
            ]
        },
        {
            path: "/", element: <Notes/>, children: [
                {path: "/notes/smt1", element: <MainContainer notes={true} pageURL={"notes/smt1.md"} />},
                {path: "/notes/ab", element: <MainContainer notes={true}  pageURL={"notes/ab.md"} />},
                {path: "/notes/devsum", element: <MainContainer notes={true}  pageURL={"notes/devsum.md"} />},
                {path: "/notes/fire", element: <MainContainer notes={true}  pageURL={"notes/fire.md"} />},
                {path: "/notes/lb2gbc", element: <MainContainer notes={true}  pageURL={"notes/lb2gbc.md"} />},

            ]
        },
        {path: "*", element: <Navigate to={"/"}/>} //change to not found
    ])

    return <RouterProvider router={router}/>

}