import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route ,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Latest from './components/Latest/Latest.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
// import Con from './components/explore/Explore.jsx'
import ContactSection from './components/contact/Contact.jsx'
const router=createBrowserRouter(
createRoutesFromElements(
<Route path='/' element={<Layout/>}>
  <Route path='' element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='latest' element={<Latest/>}/>
  <Route path='contact' element={<ContactSection/>}/>
</Route>
)
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
         <RouterProvider router={router}>
      <ScrollToTop />  {/* ScrollToTop is now within Router context */}
    </RouterProvider>
  </React.StrictMode>,
)
