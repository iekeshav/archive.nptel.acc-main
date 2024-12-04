import React from "react"
import Link from "next/link"

const Home = () => {
    return(
      <div className=" w-full flex justify-center items-center">
        <Link href="/noc/Ecertificate/" target="blank" className="btn px-5 py-2 rounded-md text-sm text-white mt-[300px]">Course Certificate</Link>
      </div>
    )
  }
  
  export default Home
