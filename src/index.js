import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Museo from "./routes/Museo";
import EcoServices from './routes/EcoServices';
import WIP from "./routes/WIP";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
      <Route path="/" element={<WIP/>} />
        <Route path="/home" element={<App />} />
        <Route path="/museo" element={<Museo />} />
        <Route path="/ecoservices" element={<EcoServices />} />
        <Route path="*" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);