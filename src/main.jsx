import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from './store/store.js'
import { fetchData } from './redux/getAllProvinceSlice.js'
import { Provider } from 'react-redux'


store.dispatch(fetchData());
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
