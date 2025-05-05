import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/profile';
import Login from './components/Login';
import Statistics from './components/Stats';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/stats" element={<Statistics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
