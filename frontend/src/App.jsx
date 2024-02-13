import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'
import SearchReports from './components/searchReports'
import MakeReport from './components/makeReport'
import YourReport from './components/yourReport'
import feStudy from './components/frontendstudy/feStudy'
import UpdateReport from './components/updateReport'
import Navbar from './components/navbar'

import './App.css'

function App() {
  
  return (
    <div className='' >
      <Navbar />
      <Routes>
            <Route path="/register" Component={Register} />
            <Route path="/login" Component={Login} />
            <Route path="/" Component={Home} />
            <Route path="/searchreport" Component={SearchReports} />
            <Route path="/add" Component={MakeReport} />
            <Route path="/yourreport" Component={YourReport} />
            <Route path="/festudy" Component={feStudy} />
            <Route path="/edit/:reportid" element={<UpdateReport />} />
      </Routes>
      
    </div>
  )
}

export default App
