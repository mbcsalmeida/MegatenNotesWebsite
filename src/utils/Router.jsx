import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {Base} from "../layouts/base";
import {Notes} from "../layouts/notes";
import {MainContainer} from "../routes/container/container.component";
import {Page404} from "../components/error/404";
import {TrackerLayout} from "../layouts/tracker/tracker-layout.component";
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
                {path: "/notes/ab", element: <MainContainer notes={true}  pageURL={"notes/ab.md"} />},
                {path: "/notes/black", element: <MainContainer notes={true}  pageURL={"notes/black.md"} />},
                {path: "/notes/dark", element: <MainContainer notes={true}  pageURL={"notes/dark.md"} />},
                {path: "/notes/devsum", element: <MainContainer notes={true}  pageURL={"notes/devsum.md"} />},
                {path: "/notes/fire", element: <MainContainer notes={true}  pageURL={"notes/fire.md"} />},
                {path: "/notes/ifyumi", element: <MainContainer notes={true}  pageURL={"notes/ifyumi.md"} />},
                {path: "/notes/lb2gbc", element: <MainContainer notes={true}  pageURL={"notes/lb2gbc.md"} />},
                {path: "/notes/lb3", element: <MainContainer notes={true}  pageURL={"notes/lb3.md"} />},
                {path: "/notes/lbgb", element: <MainContainer notes={true}  pageURL={"notes/lbgb.md"} />},
                {path: "/notes/lbgbc", element: <MainContainer notes={true}  pageURL={"notes/lbgbc.md"} />},
                {path: "/notes/looneytunes", element: <MainContainer notes={true} pageURL={"notes/looneytunes.md"} />},
                {path: "/notes/red", element: <MainContainer notes={true} pageURL={"notes/red.md"} />},
                {path: "/notes/smt1", element: <MainContainer notes={true} pageURL={"notes/smt1.md"} />},
                {path: "/notes/smt1bosses", element: <MainContainer notes={true} pageURL={"notes/smt1bosses.md"} />},
                {path: "/notes/smt1gbac", element: <MainContainer notes={true} pageURL={"notes/smt1gbac.md"} />},
                {path: "/notes/smt1gbal", element: <MainContainer notes={true} pageURL={"notes/smt1gbal.md"} />},
                {path: "/notes/smt1gban", element: <MainContainer notes={true} pageURL={"notes/smt1gban.md"} />},
                {path: "/notes/smt1psxalldemons", element: <MainContainer notes={true} pageURL={"notes/smt1psxalldemons.md"} />},
                {path: "/notes/smt1psxany", element: <MainContainer notes={true} pageURL={"notes/smt1psxany.md"} />},
                {path: "/notes/smt1psxbosses", element: <MainContainer notes={true} pageURL={"notes/smt1psxbosses.md"} />},
                {path: "/notes/smt1psxl", element: <MainContainer notes={true} pageURL={"notes/smt1psxl.md"} />},
                {path: "/notes/smt2bosses", element: <MainContainer notes={true} pageURL={"notes/smt2bosses.md"} />},
                {path: "/notes/smt2chaos", element: <MainContainer notes={true} pageURL={"notes/smt2chaos.md"} />},
                {path: "/notes/smt2law", element: <MainContainer notes={true} pageURL={"notes/smt2law.md"} />},
                {path: "/notes/smt2neutral", element: <MainContainer notes={true} pageURL={"notes/smt2neutral.md"} />},
                {path: "/notes/smt5s", element: <MainContainer notes={true} pageURL={"notes/smt5s.md"} />},
                {path: "/notes/white", element: <MainContainer notes={true} pageURL={"notes/white.md"} />},

            ]
        },
        {
            path: "/tracker", element: <TrackerLayout />
        },
        {path: "*", element: <Page404 />}
    ])

    return <RouterProvider router={router}/>

}