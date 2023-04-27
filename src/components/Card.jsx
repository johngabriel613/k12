import React from 'react'

const Card = ({questions, strand, show}) => {


  return (
    <div className={`${show} animate__animated animate__fadeIn grid gap-6 `}>
      {questions.map((question, index) => (
        <div className='bg-card py-8 px-4 rounded-lg grid gap-6 md:py-12 md:px-6' key={index}>
          <p className='text-center'>{question}</p>
          <div className='flex justify-between items-center bg-[#2c2c2c] p-3 rounded-full'>
            {[1, 2, 3, 4, 5].map((value) => (
              <input key={value} type="radio" name={`${strand}-question-${index}`} value={value} />
            ))}
          </div>
          <div className='flex justify-between text-xs'>
            <p>Strongly Disagree</p>
            <p className='text-right'>Strongly Agree</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
