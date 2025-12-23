import { createRoot } from 'react-dom/client';
import './css/index.css';
import './css/colors.css';
import Home from './pages/Home.tsx';
import CustomMatch from './pages/CustomMatch.tsx';
import Game from './pages/Game.tsx';
// @ts-ignore
import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CustomMatch" element={<CustomMatch />} />
            <Route path="/Game" element={<Game />} />
        </Routes>
    </BrowserRouter>
);
