import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { Component } from 'react';
import TopBar from './routes/topbar/topbar.component';
import MainContainer from './routes/container/container.component.jsx';

class App extends Component {

  render() {
    return (
      <Routes>
        <Route path="/" element={<TopBar />}>
          <Route index element={<MainContainer pageURL={"red-marathon-notes.md"} />} />
          <Route path="about" element={<MainContainer pageURL={"ab.md"} />} />
          <Route path="notes/red" element={<MainContainer pageURL={"ab.md"} />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
