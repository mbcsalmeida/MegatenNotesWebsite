import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
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
          <Route path="notes" key="notes" element={<MainContainer location={location} pageURL={"main/notes.md"} />} />
          <Route path="checklist" key="checklist" element={<MainContainer location={location} pageURL={"main/notes.md"} />} />
        </Route>
      </Routes>
    );
}

export default App;
