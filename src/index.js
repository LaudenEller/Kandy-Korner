import React from 'react'
import ReactDOM from 'react-dom'
import './Index.css'
import { Kandy } from './components/KandyKorner'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
        <Kandy />
        </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
)

reportWebVitals()