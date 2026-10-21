#### React 17 and React 18 main.jsx file Difference

> React 17

1. 

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)


-----

> React 18

1. 

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


----------

#### Create the project

1. 

npm create vite@5 react-router-v6-demo -- --template react

cd react-router-v6-demo

npm install


2. 

npm install react@18 react-dom@18 react-router-dom@6

npm install -D vite@5 typescript@5 @vitejs/plugin-react@4.3.4 @types/react@18 @types/react-dom@18
