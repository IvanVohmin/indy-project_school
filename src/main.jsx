import React from 'react'
import ReactDOM from 'react-dom/client'
import RenderContexts from './context/RenderContexts'
import './index.css'
import './libs/bootstrap.min.css'
import './libs/reset.css'
import RenderRoutes from './routes/RenderRoutes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RenderContexts>
      <RenderRoutes />
    </RenderContexts>
  </React.StrictMode>,
)
