import React from 'react'

function Landing() {
  return (
    <div className='text-white h-screen bg-zinc-900 pt-2'>
        <div className='textwala mt-40 px-20'>
            {["we create","Eye opening" ,"presentain"].map((item,index)=> {
                return <div className='masker'>
            <h1 className='uppercase text-9xl font-["Founder_Grotesk"] font-semibold'>{item}
            </h1>
        </div>}

            )}





            
        </div>
        <div className='border-t-2 border-zinc-750 mt-[80px]   gap-64 flex '>
            {["For public and privet companies","from the first pitch to the last pitch to Ipo"].map((item,index)=> <p className='text-md font-light leading-none'> {item} </p> )} <div className='flex justify-end gap-16'><button  className='bg-rose-300 rounded-md px-3 py-1 '>start</button></div>

        </div>
    </div>
  )
}

export default Landing