import { useEffect, useState } from "react"
import ReportService from "../services/ReportService"
import { useNavigate } from "react-router-dom"
import AuthService from "../services/authService"

export default function SearchReports() {
  let navigate = useNavigate()
  const initialReportState = {
    norekening: "",
    kronologi: ""
  }
  const [reports, setReports] = useState([])
  const [searchnorek, setSearchnorek] = useState("")
  const [currentUser, setCurrentUser] = useState(undefined)
  useEffect(() => {
    const user = AuthService.getCurrentUser()
    if(!user){
      navigate("/")
    }
  }, [])

  const onChangeSearchNorek = (e) => {
    setSearchnorek(e.target.value)
    console.log(searchnorek)
  }
  const retrieveReports = () => {
    ReportService.getAll().then(response => {
      setReports(response.data)
      console.log(response.data)
    }).catch((e) => {
      console.log(e)
    })
  }

  const getbynorekening = () => {
    ReportService.getbynorekening(searchnorek).then(response => {
      setReports(response.data)
      console.log(response.data)
    }).catch((e) => {
      console.log(e)
    })
  }
  

  
  

  return (
    
      <div>
        <div className="flex flex-row justify-center gap-3 mt-3">
          <div className="flex flex-row ">
            <div className="w-[300px] h-10 bg-white rounded-l-xl flex flex-row items-center justify-center ">
              <input className="outline-none" placeholder="Cari No Rekening di sini..." type="text" value={searchnorek} onChange={onChangeSearchNorek} name="searchnorek" />
            </div>
            <button onClick={getbynorekening} className="h-10 w-20 rounded-r-xl bg-white border border-slate-700 flex items-center justify-center">Search</button>
          </div>
          
          <button className="bg-white h-10 w-20 rounded-xl flex items-center justify-center ">Sort by</button>
        </div>
  
        {reports && reports.map((report, index) => (
          <li key={index}>
            <div className="font-semibold text-lg">{report.norekening}</div>
            <div className="">{report.kronologi}</div>
            <hr className={`w-full  mb-6 border-none h-[1px] bg-black `} />          
            
          </li>
        )) }
      </div>
    
  )
}
