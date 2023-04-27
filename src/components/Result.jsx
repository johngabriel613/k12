import React from 'react'

const Result = ({result, event}) => {
  return (
    <div>
      <div className='max-w-[450px] mx-auto text-center grid gap-4 place-items-center'>
      <h1 className='text-3xl font-bold'>HOORAY!</h1>
      <p className='text-sm'>Based on your answers, your recommended senior high school strand is:</p>
      <h2 className='text-6xl font-black text-primary'>{result}</h2>
      <p className='text-sm'>Congratulations and best of luck in your senior high school journey!</p>
      <button className='call-to-action w-fit' onClick={event}>Test again</button>
    </div>
    </div>
  )
}

export default Result
