
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'


function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow lg:container lg:mx-auto mx-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
