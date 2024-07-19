import React from 'react'
import Navbar from './component/Navbar'
import Hello from './component/Hello'
import Card from './component/Card'
import img from './assets/image 1.png'
import imag from './assets/wedding-photography 1.png'
import ima from './assets/mountain-bike 1.png'
function App() {
  return (
    <>
    <Navbar />
    <Hello />
    <div className='flex w-full pl-44'>
    <Card name="SOLD OUT" num = "5.0" num2="6" text="Life lessons with Katie Zaferes" frw="$136" image={img}/>
    <Card name="ONLINE" num="5.0" num2="30" text="Learn wedding photography" frw="$125" image={imag}/>
    <Card name="ACTIVE" num="4.8" num2="2" text="Group Mountain Biking" frw="$50" image={ima}/>
    </div>
    </>
  )
}

export default App
