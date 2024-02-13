import { Link, useParams, useNavigate } from "react-router-dom"
import ReportService from "../services/ReportService";
import { useEffect, useState } from "react";


const UpdateReport = () => {
  const { reportid } = useParams();
  const navigate = useNavigate()
  const initialReportState = {
    id:null,
    norekening: "",
    kronologi: ""
  }
  
  const [currentreport, setCurrentReport] = useState(initialReportState)
  
  
  const retrieveReport = () => {
    ReportService.getbyid(reportid).then(response => {
      setCurrentReport(response.data)
      console.log(response.data)
    }).catch((e) => {
      console.log(e)
    })
  }

  useEffect(() => {
    retrieveReport()
  }, [])

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setCurrentReport({...currentreport, [name]:value})
    console.log(currentreport.kronologi)
  }

  const updateReport = () => {
    ReportService.update(currentreport.id, currentreport)
    navigate("/yourreport")
  }
  
  
  return (
    
    <div className="flex justify-center items-center  h-[100vh]  ">
      <div className="bg-white w-[400px] h-[400px] flex flex-col justify-center items-center rounded-2xl drop-shadow-xl  ">
        <form onSubmit={updateReport} className="flex flex-col items-center">
          <input type="text" placeholder="No Rekening" className="outline-none" onChange={handleInputChange} value={currentreport.norekening} name="norekening" />
          <hr className={`w-full  mb-6 border-none h-[1px] bg-black `} />
          <input type="text" placeholder="Kronologi" className="outline-none" onChange={handleInputChange} value={currentreport.kronologi} name="kronologi"/>
          <hr className={`w-full  mb-6 border-none h-[1px] bg-black `} />
          <Link className="" to='/yourreport'>
            <div className="h-10 w-20 rounded-xl bg-red-500 flex items-center justify-center">
            Return
          </div>
          </Link>
          <button className="bg-slate-600 rounded-md w-[40%] h-[35px] text-sm text-white drop-shadow-xl place-self-start " type="submit">Submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default UpdateReport
