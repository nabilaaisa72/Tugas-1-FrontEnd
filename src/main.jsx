import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/Header.jsx'
import Utama from './Components/Utama.jsx'
import Contoh from './Pages/Contoh.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Header /> */}
    {/* <Utama /> */}
    <Contoh />
  </React.StrictMode>,
)
