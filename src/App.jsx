import { Outlet } from 'react-router-dom'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import SocialLogin from './components/SocialLogin'

function App() {

  return (
    <div className="App">
      <Outlet/>
      <ToastContainer />
    </div>
  )
}

export default App
