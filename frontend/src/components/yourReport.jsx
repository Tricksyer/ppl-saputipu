import { useState, useEffect } from "react"
import ReportService from "../services/ReportService"
import { Link, useNavigate } from "react-router-dom"
import AuthService from "../services/authService"


export default function YourReport() {
  let navigate = useNavigate()
  const [reports, setReports] = useState([])
  const [currentUser, setCurrentUser] = useState()
  useEffect(() => {
    const user = AuthService.getCurrentUser()
    if(!user){
      navigate("/")
    }else{
      setCurrentUser(user)
    }
  }, [])
  
  const deletereport = (id) => {
    ReportService.remove(id).then(() => {
      setReports((prevReports) =>
          prevReports.filter((report) => report.id !== id)
        )
    })

  }
  const retrieveReports = () => {
    const user = AuthService.getCurrentUser()
    ReportService.getbyuserid(user.id).then(response => {
      setReports(response.data)
      console.log(response.data)
    }).catch((e) => {
      console.log(e)
    })
  }
  

  useEffect(() => {
    retrieveReports()
  }, [])
  
  

  return (
    
    <div>

      {reports && reports.map((report, index) => (
        <div key={index}>
          <div>indexnya = {report.id} </div>
          <div className="font-semibold text-lg">{report.norekening}</div>
          <div className="">{report.kronologi}</div>
          <button onClick={()=> deletereport(report.id)} className="h-10 w-20 rounded-xl bg-red-600">Delete</button>
          <Link className="" to={`/edit/${report.id}`}>
            <div className="h-10 w-20 rounded-xl bg-yellow-400 flex items-center justify-center">
            Edit  
          </div>
          </Link>
          
          
        </div>
      )) }
      
    </div>
    
    
    
    
  )
}
