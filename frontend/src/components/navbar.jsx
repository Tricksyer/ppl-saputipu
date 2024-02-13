import { Link, useLocation} from 'react-router-dom'
import AuthService from "../services/authService"
import { useEffect, useState } from 'react'

const Navbar = () => {
  
  const [currentUser, setCurrentUser] = useState(true)
  const location = useLocation()
  useEffect(() => {
    console.log("use effect terpakai")
    console.log(currentUser)
    if (location.pathname.indexOf("") > -1 || 
    location.pathname.indexOf("login") > -1 ||
    location.pathname.indexOf("register") > -1) {
      setCurrentUser(false)
    }
    if (location.pathname.indexOf("add") > -1 || 
    location.pathname.indexOf("searchreport") > -1 ||
    location.pathname.indexOf("yourreport") > -1) {
      setCurrentUser(true)
    }
    
  }, [location.pathname])

  const logOut = () => {
    AuthService.logout()
  }

  return (
    <nav className="w-full h-14 bg-teal-500 flex flex-row items-center gap-3 justify-between ">
        <div className="font-black text-3xl ml-3 ">Saputipu</div>
        <div className="flex flex-row gap-5 mr-5">
            
            <Link to="/searchreport">Search</Link>
            <Link to="/add">Make Report</Link>
            <Link to="/yourreport">Your Report</Link>
            {currentUser==true ? (
              <Link to="/" onClick={logOut} >Logout</Link>
            ):(
              <div className=' flex gap-2'>
                <Link to="/login">Login</Link>
                <Link to="/register">Sign Up</Link>
              </div>
            )}
            
        </div>
        
    </nav>
  )
}

export default Navbar