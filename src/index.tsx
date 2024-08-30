/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-29 19:00:29
 * @LastEditors: lugfa
 * @LastEditTime: 2024-08-30 10:01:52
 * @FilePath: /react-ts-app/src/index.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
