import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { Component } from 'react';
import {NavBar} from './routes/navbar/navbar.component.jsx';
import MainContainer from './routes/container/container.component.jsx';

class App extends Component {

  render() {
    return (
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index key="root" element={<MainContainer pageURL={"main/home.md"} />} />
          <Route path="home" key="home" element={<MainContainer pageURL={"main/home.md"} />} />
          <Route path="about" key="about" element={<MainContainer pageURL={"main/about.md"} />} />
          <Route path="credits" key="credits" element={<MainContainer pageURL={"main/credits.md"} />} />
          <Route path="notes" key="notes" element={<MainContainer pageURL={"main/notes.md"} />} />
          <Route path="checklist" key="checklist" element={<MainContainer pageURL={"main/notes.md"} />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
