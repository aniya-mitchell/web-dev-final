import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './routes/layout.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedView from './routes/feedView.jsx'
import CreateView from './routes/createView.jsx'
import PostView from './routes/postView.jsx'
import EditView from './routes/editView.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index={false} element={<Layout />}>
            <Route index={true} element={<App />} />
            <Route index={false} path="/feed" element={<FeedView />} />
            <Route index={false} path='/create-post' element={<CreateView />} />
            <Route index={false} path="/feed/post/:id" element={<PostView />} />
            <Route index={false} path="/feed/edit/:id" element={<EditView />} />

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

