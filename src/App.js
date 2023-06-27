import './App.css';
import {  Routes, Route } from "react-router-dom"
import './lib/font-awesome/css/all.min.css'
import Watched from './components/Watched';
import Watchlist from './components/Watchlist';
import Add from './components/Add';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Watchlist />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
