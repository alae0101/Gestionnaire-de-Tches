import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import './styles/globalStyles.js';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext'; // Import the ThemeProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider> {/* Wrap with ThemeProvider */}
                <BrowserRouter>

                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();