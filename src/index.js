import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from 'react-redux';
import store, { persistor } from './store/store';
import QueryProviderClient from './middlewares/query-client-provider';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryProviderClient>
    <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </PersistGate>
    </Provider>
  </QueryProviderClient>
);