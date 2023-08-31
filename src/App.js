import './App.css';
import { Routes, Route } from "react-router-dom";
import {NavBar} from './routes/navbar/navbar.component.jsx';
import MainContainer from './routes/container/container.component.jsx';
import { useLocation } from 'react-router-dom';

const App = () => {
    let location = useLocation();

    return (
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index key="root" element={<MainContainer location={location} pageURL={"main/home.md"} />} />
          <Route path="home" key="home" element={<MainContainer location={location} pageURL={"main/home.md"} />} />
          <Route path="about" key="about" element={<MainContainer location={location} pageURL={"main/about.md"} />} />
          <Route path="credits" key="credits" element={<MainContainer location={location} pageURL={"main/credits.md"} />} />
          <Route path="games" key="notes" element={<MainContainer location={location} pageURL={"main/notes.md"} />} />
          <Route path="checklist" key="checklist" element={<MainContainer location={location} pageURL={"main/notes.md"} />} />
          <Route path="notes/smt1" key="notes/smt1" element={<MainContainer location={location} pageURL={"notes/smt1.md"} />} />
          <Route path="notes/ab" key="notes/ab" element={<MainContainer location={location} pageURL={"notes/ab.md"} />} />
          <Route path="notes/devsum" key="notes/devsum" element={<MainContainer location={location} pageURL={"notes/devsum.md"} />} />
          <Route path="notes/fire" key="notes/fire" element={<MainContainer location={location} pageURL={"notes/fire.md"} />} />
          <Route path="notes/lb2gbc" key="notes/lb2gbc" element={<MainContainer location={location} pageURL={"notes/lb2gbc.md"} />} />
          <Route path="notes/lbgbc" key="notes/lbgbc" element={<MainContainer location={location} pageURL={"notes/lbgbc.md"} />} />
          <Route path="notes/sh" key="notes/sh" element={<MainContainer location={location} pageURL={"notes/sh.md"} />} />
          <Route path="notes/smt5s" key="notes/smt5s" element={<MainContainer location={location} pageURL={"notes/smt5s.md"} />} />
          <Route path="notes/ifyumi" key="notes/ifyumi" element={<MainContainer location={location} pageURL={"notes/ifyumi.md"} />} />
          <Route path="notes/smt1sfcbosses" key="notes/smt1sfcbosses" element={<MainContainer location={location} pageURL={"notes/smt1bosses.md"} />} />
          <Route path="notes/smt1psxbosses" key="notes/smt1psxbosses" element={<MainContainer location={location} pageURL={"notes/smt1psxbosses.md"} />} />
          <Route path="notes/smt2bosses" key="notes/smt2bosses" element={<MainContainer location={location} pageURL={"notes/smt2bosses.md"} />} />
          <Route path="notes/smt2law" key="notes/smt2law" element={<MainContainer location={location} pageURL={"notes/smt2law.md"} />} />
          <Route path="notes/smt2neutral" key="notes/smt2neutral" element={<MainContainer location={location} pageURL={"notes/smt2neutral.md"} />} />
          <Route path="notes/smt2chaos" key="notes/smt2chaos" element={<MainContainer location={location} pageURL={"notes/smt2chaos.md"} />} />
          <Route path="notes/red" key="notes/red" element={<MainContainer location={location} pageURL={"notes/red.md"} />} />
          <Route path="notes/black" key="notes/black" element={<MainContainer location={location} pageURL={"notes/black.md"} />} />
          <Route path="notes/white" key="notes/white" element={<MainContainer location={location} pageURL={"notes/white.md"} />} />
          <Route path="notes/lb3" key="notes/lb3" element={<MainContainer location={location} pageURL={"notes/lb3.md"} />} />
          <Route path="notes/smt1psx" key="notes/smt1psx" element={<MainContainer location={location} pageURL={"notes/smt1psxl.md"} />} />
          <Route path="notes/smt1gbal" key="notes/smt1gbal" element={<MainContainer location={location} pageURL={"notes/smt1gbal.md"} />} />       
        </Route>
      </Routes>
    );
}

export default App;
