
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/navbar';
import Footer from './Components/Footer';

function App() {


  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </>
  )
}

export default App
