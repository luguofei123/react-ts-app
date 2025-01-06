/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-29 19:00:29
 * @LastEditors: lugfa
 * @LastEditTime: 2025-01-06 17:02:32
 * @FilePath: /react-ts-app/src/index.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
