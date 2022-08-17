import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import From from './component/From';
import List from './component/List';
import { Provider } from 'react-redux';
import Store from './Store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={Store}>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/From' element={<From />}/>
    <Route path='/List' element={<List />}/>
  </Routes>
  </BrowserRouter>
  </Provider>
);
reportWebVitals();
