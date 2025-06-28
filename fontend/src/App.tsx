import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Application from './pages/application/applicationspage';
import Login from './pages/login';
import Statistics from './components/Stats';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Application />} />
        <Route path="/stats" element={<Statistics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
