export default function feStudy() {
  return (
    <div className="w-full h-full">
        <div className="bg-black w-full h-10 text-white flex items-center">
        <div className="ml-5">Kinetik</div>
        </div>
        <div className="flex flex-row w-full h-full">
            <div className="bg-black h-screen w-[50%] flex flex-col items-center gap-4">
                <div className="text-white font-bold ">Sign in to access our documentation</div>
                <div className="w-10/12 h-10 rounded-sm border border-white flex items-center justify-center">
                    <input type="email" className="outline-none bg-transparent w-[90%] text-white" placeholder="Email Address"/>
                </div>
                <div className="w-10/12 h-10 rounded-sm border border-white flex items-center justify-center">
                <input type="password" className="outline-none bg-transparent w-[90%] text-white" placeholder="Password"/>
                </div>
                <button className="bg-red-600 rounded-2xl w-[80px] h-[30px] text-xs text-white">Sign in</button>
                <hr className="bg-red-500 w-[80%] h-1 outline-none border-0 "/>
                <div className="flex flex-row justify-between w-[80%]">
                    <div className="text-xs text-white">Forgot Password</div>
                    <div className="text-xs text-white">Don't have an account? Register here</div>
                </div>
                <div className="w-[60%] flex flex-row justify-between text-white text-xs">
                    <u>Support</u>
                    <u>Documentation</u>
                    <u>Legal</u>
                </div>
            </div>
            <div className="bg-red-700 w-[50%] h-screen"></div>
        </div>
    </div>
    
    
  )
}
