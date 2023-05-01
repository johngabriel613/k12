import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { surveyForm } from '../constants/data'

const Result = ({result, event}) => {
  return (
    <div className='max-w-[450px] mx-auto grid gap-4 text-center'>
      <div className="bg-white shadow-md rounded-lg p-6">
      <div className="grid gap-4 place-items-center">
        <h2 className="text-3xl font-bold">Result:</h2>
        <p className="text-sm">
          Based on your answers, your recommended senior high school strand is:
        </p>
        <div className="w-full relative">
          <Player
            src="https://assets2.lottiefiles.com/packages/lf20_obhph3sh.json"
            className="absolute w-full max-w-[400px] top-[-150px]"
            autoplay
          />
          <h2 className="text-6xl font-black text-primary animate__animated animate__fadeIn animate__delay-1s">
            {result}
          </h2>
        </div>
        <p className="text-sm">
          Congratulations and best of luck in your senior high school journey!
        </p>
        <button className="call-to-action w-fit z-10" onClick={event}>
          Test again
        </button>
      </div>
    </div>
    <div className="bg-white shadow-md rounded-lg p-6 grid gap-4">
      <h2 className='text-3xl font-bold'>Rate us!</h2>
      <p>Please answer this survey after completing the test. <a href={surveyForm.link} target="_blank" rel="noopener noreferrer" className='text-primary underline'>Click here</a></p>
    </div>
    </div>
  );
}

export default Result
