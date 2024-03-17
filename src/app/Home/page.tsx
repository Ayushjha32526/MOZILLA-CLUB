import React from 'react'
import Image from 'next/image'
import "./page.css"
const About = () => {
  
  return (
    <>
    
    <div>
       
        <div>
        <Image src="/Hackathon2.png"
        alt='Hackathon'
        className='rounded-md filter opacity-40 '
        width={1700} height={50}
       ></Image>
       <div className="absolute left-20 top-80">
       <h1 className='text-8xl font-bold text-purple-800'>
       2024 Best of <br></br> Hackathon24 </h1>
       </div>
       
       <div className="absolute left-60 bottom-40">
        
        <h1 className='text-4xl font-bold  text-purple-800'>
            ~ By Mozilla Club
        </h1>
       </div>
     <div className='flex absolute bottom-1 text-4xl font-bold ml-8  text-purple-900'>
        <h1 className='ml-4 border-2 border-purple-800 border-round rounded-full'>Food & Drinks</h1>
        <h1 className='ml-4 border-2 border-purple-800 border-round rounded-full'> Prizes</h1>
        <h1 className='ml-4 border-2 border-purple-800 border-round rounded-full'>Entertainment</h1>

     </div>
       </div>
       <div className="container">
        </div>
        <h1 className='ok'>
          MARCH  
        </h1><br></br>
        <h1 className='ok1'>
          30
        </h1><br></br>
        <h1 className='ok2'>
          SATURDAY
        </h1>
        <h1 className='ok3'>
          Starts At
        </h1>
        <h1 className='ok4'>
          10:00 AM
        </h1>
        <h1 className='ok5'>
          Ends At
        </h1>
        <h1 className='ok6'>
          11:00 PM
        </h1>

        <Image src="/scanner.png"
        alt='Scanner'
        className='ok7  '
        width={240} height={80}
       ></Image>

       <h1 className='ok8'>
        Venue:Auditorium
       </h1>

       <h1 className='ok9'>
        RegisterNow
       </h1>
    </div>
    
    
    </>
 
  )
}

export default About