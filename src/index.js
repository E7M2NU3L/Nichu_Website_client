import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from 'react-redux';
import store from './store/store';
import QueryProviderClient from './middlewares/query-client-provider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryProviderClient>
    <Provider store={store} >
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </Provider>
  </QueryProviderClient>
);