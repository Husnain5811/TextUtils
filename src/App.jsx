import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState('pink')
  const [text, setText] = useState('')

  const upperclick = () => {
     let newtext = text.toUpperCase()
     setText(newtext)
  }
  const lowerclick = () => {
     let newtext = text.toLowerCase()
     setText(newtext)
  }
  const clearclick = () => {
     let newtext = ""
     setText(newtext)
  }

  const handlechange = (event) => {
    setText(event.target.value)
  }
  return (


    <>
      <div style={{ backgroundColor: color }} className='w-[100vw] flex justify-center min-h-[100vh]'>
        
        <div className="menu w-[600px] p-5 fixed flex gap-5 justify-center rounded-full bg-white mx-auto ">
          <button onClick={() => setColor('red')} className='px-5 py-1 rounded-full text-white bg-red-600'>Red</button>
          <button onClick={() => setColor('green')} className='px-5 py-1 rounded-full text-white bg-green-600'>Green</button>
          <button onClick={() => setColor('yellow')} className='px-5 py-1 rounded-full text-white bg-yellow-600'>Yellow</button>
          <button onClick={() => setColor('orange')} className='px-5 py-1 rounded-full text-white bg-orange-600'>Orange</button>
          <button onClick={() => setColor('purple')} className='px-5 py-1 rounded-full text-white bg-purple-600'>Purple</button>
        </div>

        <div className="main  w-[700px] ml-20  mt-32">
          <h1 className='text-2xl font-bold'> Your Text Convert to Uppercase , Lowercase</h1>
          <textarea className='w-[700px] outline-none resize-none mt-5 rounded-lg p-5' onChange={handlechange}  value={text} rows={10}></textarea>
          <div className="btn mt-5">
            <button className='inline-block px-5 py-2 bg-black text-white' onClick={upperclick}>Convert to Uppercase</button>
            <button className='inline-block px-5 py-2 mx-4 bg-black text-white' onClick={lowerclick}>Convert to Lowercase</button>
            <button className='inline-block px-5 py-2 mx-4 bg-black text-white' onClick={clearclick}>Clear Text</button>
            <br /><br />
            <hr  />
            <h1 className='mt-2 text-2xl font-bold text-white'>Your text summary</h1>
             <p className='mt-3'>{text.split(' ').length} words and {text.length} charter</p>
             <p>{0.008 * text.split(" ").length} Minutes Read</p>
             <h1 className='mt-5 text-2xl font-bold mb-5'>Preview Text</h1>
             {text}
          </div>
        </div>
      </div>
    </>
  )
}

export default App


