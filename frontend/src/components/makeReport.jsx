import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ReportService from "../services/ReportService"
import AuthService from "../services/authService"

const MakeReport = () => {
  let navigate = useNavigate()
  const initialReportState = {
    norekening: "",
    kronologi: "",
    reporter:null
  }
  const [report, setReport] = useState(initialReportState)
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    const user = AuthService.getCurrentUser()
    if(!user){
      navigate("/")
    }else{
      setCurrentUser(user)
    }
  }, [])
  
  const handleInputChange = (e) => {

    const {name, value} = e.target
    setReport({ ...report, [name]:value})
    
  }
  const saveReport = () => {
    console.log(currentUser.id)
    var data = {
      norekening: report.norekening,
      kronologi: report.kronologi,
      userId: currentUser.id
    }

    ReportService.create(data).then((response) => {
      setReport({
        norekening : response.data.norekening,
        kronologi: response.data.kronologi,
        
      })
      // setSubmitted(true)
      console.log(response.data)
    }).catch((e) => {
      console.log(e)
    })
  }
  
  
  return (
    
    <div className="flex justify-center items-center  h-[100vh]  ">
      <div className="bg-white w-[400px] h-[400px] flex flex-col justify-center items-center rounded-2xl drop-shadow-xl  ">
        <form onSubmit={saveReport} className="flex flex-col items-center">
          <input type="text" placeholder="No Rekening" className="outline-none" onChange={handleInputChange} value={report.norekening} name="norekening" />
          <hr className={`w-full  mb-6 border-none h-[1px] bg-black `} />
          <input type="text" placeholder="Kronologi" className="outline-none" onChange={handleInputChange} value={report.kronologi} name="kronologi"/>
          <hr className={`w-full  mb-6 border-none h-[1px] bg-black `} />
          <button className="bg-slate-600 rounded-md w-[40%] h-[35px] text-sm text-white drop-shadow-xl place-self-start " type="submit">Submit</button>
        </form>
      </div>
    </div>
    

  )
}

export default MakeReport
