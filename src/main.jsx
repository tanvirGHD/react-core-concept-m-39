import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './counter.jsx'
import Team from './Team.jsx'
import App from './App.jsx'
import './index.css'
import Users from './Users.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counter></Counter>
    <Team></Team>
    <Users></Users>
  </StrictMode>,
  
)
