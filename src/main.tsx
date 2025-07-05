import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Meta, Route, Routes } from 'react-router'
import Politics from './pages/Politics.tsx'
import Navbar from './component/Navbar.tsx'
import Footer from './component/Footer.tsx'
import Technology from './pages/Technology.tsx'
import Sports from './pages/Sports.tsx'
import Business from './pages/Business.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <BrowserRouter>
      <Navbar />
      <main className='lg:container lg:mx-auto mx-4 '>
        <Routes>
          <Route index element={<App />} />
          <Route path='politics' element={<Politics />} />
          <Route path='technology' element={<Technology />} />
          <Route path='sports' element={<Sports />} />
          <Route path='business' element={<Business />} />
        </Routes>
       
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)
