import React from 'react'

function Navbar() {
  return (
    <div className=' fixed z-[999] w-full px-20 py-8 flex justify-between items-center'>
        <div><img className='h-12 w-12 rounded-md' src="https://www.brandbucket.com/sites/default/files/logo_uploads/319164/stamped_preview_w7.png" alt="" /></div>
        <div className="links flex gap-10 text-white">
            {["servics","our work","About us","Insights " ,"contact"].map((item,index) => (
                <a key={index} className={`text-md font-semibold ${ index=== 4 && "ml-32"}`}>{item} </a>
            ))}

        </div>
    </div>
  )
}

export default Navbar;