import React from 'react'
import shirt from "./assets/shirtbg.png"
import { Icon } from '@iconify/react';
import black from "./assets/black.jfif"
import white from "./assets/white.webp"

export const App = () => {
  return (
    <div className='bg-blue-300 h-screen w-full flex items-center justify-center'>
      <div className='bg-white w-auto h-96 rounded-xl relative'>
        <div className='flex'>
        <img src={shirt} className="w-96 rounded-xl object-cover p-5"></img>
        <div className=''>
          <div className='p-5'>
           
        <div className=' font-semibold text-base md:text-xl '>T-shirt(ORICON STORE)</div>
         <div className=' right-auto font-bold text-slate-600'>$187</div>
         <div className='flex flex-row mt-2'>{Array(5).fill(0).map(()=><Icon icon="emojione:glowing-star" className='h-4 w-2 md:h-6 md:w-6 '/>)}<span className='text-slate-600 font-bold'>(87)</span></div>
         <div className='mt-3 font-mono'>choose the color</div>
         <div className=''><button className=' rounded-full w-8 h-8 hover:animate-bounce'><Icon icon="emojione:black-circle"className='h-8 w-8' /></button><span>  </span><button className='w-8 hover:animate-bounce'><Icon icon="twemoji:green-circle"  className='w-8 h-8'/></button></div>
         <div className='mt-3 font-mono'><span>choose the size</span></div>
         <div className='mt-3'><button className='rounded-xl bg-blue-300 text-white w-12 h-8 btn-primary hover:animate-bounce'>xxs</button><span>  </span><button className='rounded-xl bg-blue-300 text-white w-12 h-8  hover:animate-bounce'>xs</button><span>  </span><button className='rounded-xl bg-blue-300 text-white w-12 h-8 h hover:animate-bounce'>s</button><span>  </span><button className='rounded-xl bg-blue-300 text-white w-12 h-8  hover:animate-bounce'>m</button></div>
         <div className='mt-2'><button className='rounded-xl bg-blue-300 text-white w-12 h-8 btn-primary hover:animate-bounce'>l</button><span>  </span><button className='rounded-xl bg-blue-300 text-white w-12 h-8  hover:animate-bounce'>xl</button><span>  </span><button className='rounded-xl bg-blue-300 text-white w-12 h-8 h hover:animate-bounce'>xxl</button><span>  </span><button className='rounded-xl bg-blue-300 text-white w-12 h-8  hover:animate-bounce'>xxxl</button></div>
         <div className='mt-2  '><button className=' bg-indigo-700 rounded-lg text-white mt-8 w-48 h-8 hover:animate-bounce'>add to bag</button></div>
         <div className='absolute top-0 right-1'><Icon icon="material-symbols:cancel-outline-rounded" className='h-6 w-6'/></div>
        </div>
        
         </div>
        </div>

      </div>
      </div>
  )
}


export default App
