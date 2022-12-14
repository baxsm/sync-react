import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/style.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <App />
);