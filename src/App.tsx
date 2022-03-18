import './App.css';
import Intro from './components/Intro';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Intro />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
