import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Application from './pages/application/applicationspage';
import Profile from './components/profileComponent/profile';
import Login from './pages/login';
import Statistics from './components/Stats';
import DashboardLayout from './components/layouts/Layout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<DashboardLayout />}>
        <Route path="/applications" element={<Application />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/stats" element={<Statistics />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
