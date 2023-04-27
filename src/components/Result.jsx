import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

const Result = ({result, event}) => {
  return (
    <div>
      <div className='max-w-[450px] mx-auto text-center grid gap-4 place-items-center'>
      <h1 className='text-3xl font-bold'>HOORAY!</h1>
      <p className='text-sm'>Based on your answers, your recommended senior high school strand is:</p>
      <div className='w-full relative'>
        <Player src='https://assets2.lottiefiles.com/packages/lf20_obhph3sh.json' className='absolute w-full max-w-[400px] top-[-150px]' autoplay />
        <h2 className='text-6xl font-black text-primary animate__animated animate__fadeIn animate__delay-1s'>{result}</h2>
      </div>
      <p className='text-sm'>Congratulations and best of luck in your senior high school journey!</p>
      <button className='call-to-action w-fit z-10' onClick={event}>Test again</button>
    </div>
    </div>
  )
}

export default Result
