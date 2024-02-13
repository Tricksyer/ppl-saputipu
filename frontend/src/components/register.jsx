import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState, FormEvent } from 'react'
import AuthService from '../services/authService'

export default function Register() {
    let navigate = useNavigate()
    const [usern, setUsern] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [istypinguser, setIstypinguser] = useState(false)
    const [istypingemail, setIstypingemail] = useState(false)
    const [istypingpass, setIstypingpass] = useState(false)
    const onChangeUsern = (e) => {
        setUsern(e.target.value)
        setIstypinguser(true)
        setIstypingpass(false)
        setIstypingemail(false)
        console.log(e.target.value)
    }

    const onChangePass = (e) => {
        setPass(e.target.value)
        setIstypinguser(false)
        setIstypingemail(false)
        setIstypingpass(true)
        console.log(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
        setIstypingemail(true)
        setIstypinguser(false)
        setIstypingpass(false)
        console.log(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        // console.log(usern+" "+ email+ " "+pass)
        AuthService.register(usern, email, pass).then(
            () => {
                navigate("/login")
            }
        )
    }
    return (
    <div className="flex justify-center items-center h-[100vh] ">
        <div className="w-[400px] h-[400px] bg-white flex flex-col justify-center items-center rounded-2xl drop-shadow-xl ">
        <div className="font-semibold text-xl mb-6 ">Register Form</div>  
        <form id="login" onSubmit={handleSubmit} className="flex flex-col items-center mb-8">
            <input className="outline-none mb-1 font-normal text-sm " type="text" placeholder="Username" value={usern} onChange={onChangeUsern} />
            <hr className={`w-full  mb-6 border-none h-[1px] ${istypinguser ? 'bg-black' : 'bg-slate-400'} `} />
            <input className="outline-none mb-1 font-normal text-sm " type="email" placeholder="Email Address" value={email} onChange={onChangeEmail} />
            <hr className={`w-full  mb-6 border-none h-[1px] ${istypingemail ? 'bg-black' : 'bg-slate-400'} `} />
            <input className="outline-none mb-1 font-normal text-sm " type="password" placeholder="Password" value={pass} onChange={onChangePass} />
            <hr className={`w-full  mb-6 border-none h-[1px] ${istypingpass ? 'bg-black' : 'bg-slate-400'} `} />
            <button className="bg-slate-600 rounded-md w-[40%] h-[35px] text-sm text-white drop-shadow-xl place-self-start " type="submit">Sign Up</button>
        </form>
        <div className="text-xs">Sudah punya akun? <Link className='text-cyan-600' to={'/login'}>Sign in here</Link> </div>
        
        
    </div>
    
    </div>
  )
}
