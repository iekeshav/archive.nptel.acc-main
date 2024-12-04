"use client"
import React from "react"
import Link from "next/link"

const Ecertificate = () => {

  const handleClick = () => {
    window.open('/NOC24HS29S1257800643.pdf', '_blank');
  };

    return(
      <div className=" w-full flex justify-center items-center">
        <Link onClick={handleClick} href="" target="blank" className="btn px-5 py-2 rounded-md text-white text-sm mt-[300px]">Course Certificate</Link>
      </div>
    )
  }
  
  export default Ecertificate