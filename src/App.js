import './App.css';
import { Routes, Route } from 'react-router-dom';
import './lib/font-awesome/css/all.min.css';
import Watched from './components/Watched';
import Watchlist from './components/Watchlist';
import Add from './components/Add';
import Header from './components/Header';
import { GlobalProvider } from './context/GlobalState';

function App() {
    return (
        <GlobalProvider>
            <Header />
            <Routes>
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/watched" element={<Watched />} />
                <Route path="/add" element={<Add />} />
            </Routes>
        </GlobalProvider>
    );
}

export default App;
