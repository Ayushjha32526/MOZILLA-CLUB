import React from 'react';
import Image from 'next/image';
import "./page.css"
const Abouts = () => {
  return (
    <div>

      <div>
        <Image
          src="/AIML.png"
          alt="Code"
          className=" no2"
          width={200}
          height={24}
        />
      </div>
      <Image
        src="/code.png"
        alt="WEB"
        className="no1 "
        width={230}
        height={24}
      />
      <br></br>
      <br></br>
      <Image
        src="/WEB.png"
        alt="AIML"
        className="no"
        width={300}
        height={240}
      />
      <div>
        <h1 className='text-bold text-5xl text-purple-900 text-center ml-16'>Code Hackathon</h1>

        <h1 className='text-bold text-2xl  text-center ml-16'>Get ready to tackle real-world problems ranging from software development <br></br>to data analysis and beyond. <br></br>Our carefully crafted problem statements will test your skills and push your limits.</h1>

      </div>
      <br></br>
      <br></br>
      <div>
        <h1 className='text-bold text-5xl text-bold text-purple-900 text-right mr-16'>WEBD Hackathon</h1>
        <h1 className='text-bold text-2xl  text-right mr-16'> Dive into a series of web development challenges designed to test your skills in <br></br> frontend, backend, UI/UX design, and more. <br></br> From creating responsive layouts to implementing <br></br> cutting-edge features, there{"'"}s a challenge for every level of expertise.
        </h1>
      </div>
      <br></br>
      <br></br>
      <div>
        <h1 className='text-bold text-5xl  text-purple-900 text-center ml-16'>AIML Hackathon</h1>
        <h1 className='text-bold text-2xl  text-center ml-16'> Get ready to tackle real-world challenges in AI and machine learning. <br></br>From natural language processing to computer vision and <br></br>predictive analytics, our problem statements will put your skills to the test.</h1>
      </div>
    </div>



  );
};

export default Abouts;
