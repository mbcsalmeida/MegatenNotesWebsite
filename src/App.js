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
          <Route index element={<MainContainer pageURL={"red-marathon-notes.md"} />} />
          <Route path="about" element={<MainContainer pageURL={"ab.md"} />} />
          <Route path="credits" element={<MainContainer pageURL={"ab.md"} />} />
          <Route path="notes" element={<MainContainer pageURL={"ab.md"} />} />
          <Route path="checklist" element={<MainContainer pageURL={"ab.md"} />} />
          <Route path="notes/red" element={<MainContainer pageURL={"red-marathon-notes.md"} />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
