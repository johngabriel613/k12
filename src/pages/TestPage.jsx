import React from 'react'
import { useState } from 'react'
import { questions } from '../constants/data'
import Card from '../components/Card'
import Result from '../components/Result'

const TestPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({
    ABM: [],
    STEM: [],
    TVLHE: [],
    TVLICT: [],
    HUMSS: [],
  });
  const [resultStrand, setResultStrand] = useState(null);
  const [result, setResult] = useState(false)


  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 1);
  }

  const handleAnswerSubmit = () => {
    const updatedAnswers = { ...answers };
    const scores = {
      ABM: 0,
      STEM: 0,
      TVLHE: 0,
      TVLICT: 0,
      HUMSS: 0,
    };

    questions.map((question) => {
      for (let i = 0; i < 5; i++) {
        const selectedAnswer = document.querySelector(
          `input[name=${question.strand}-question-${i}]:checked`
        )?.value;
        if (selectedAnswer) {
          updatedAnswers[question.strand].push(selectedAnswer);
          scores[question.strand] += parseInt(selectedAnswer);
        }
      }
    });

    let highestScoringStrands = [];
    let highestScore = 0;
    for (const [strand, score] of Object.entries(scores)) {
      if (score > highestScore) {
        highestScore = score;
        highestScoringStrands = [strand];
      } else if (score === highestScore) {
        highestScoringStrands.push(strand);
      }
    }

    let result;
    if (highestScoringStrands.length === 1) {
      result = highestScoringStrands[0];
    } else if (highestScoringStrands.length === 2) {
      result = highestScoringStrands.join(', ');
    } else {
      result = 'GAS';
    }

    setResultStrand(result);
    setResult(true)
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setAnswers({
      ABM: [],
      STEM: [],
      TVLHE: [],
      TVLICT: [],
      HUMSS: [],
    });
    setResultStrand(null);
    setResult(false);
  }


  if(!result){
    return (
      <div className='max-w-[450px] mx-auto grid gap-6'>
        <div className='grid gap-3'>
          <p>Read carefully, choose the response that best reflects your opinion, and be honest with your answers.</p>
          <div className='grid gap-2'>
            <p className='text-right'><span className='text-primary text-4xl'>{currentIndex + 1}</span>/5</p>
            <div className='progress rounded-full w-full h-[5px] bg-[#2c2c2c]'>
              <div className={`h-[5px] rounded-full bg-primary`} style={{ width: `${((currentIndex + 1)/5)*100}%` }}></div>
            </div>
          </div>
        </div>
        {questions.map((question, index) => {
          const shuffledQuestions = [...question.listOfQuestions];
          for (let i = shuffledQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
          }
          return (
            <Card
              show={currentIndex === index ? 'block' : 'hidden'}
              key={index}
              questions={shuffledQuestions}
              strand={question.strand}
            />
          );
        })}
        <div className='flex justify-end gap-6'>
          <button
            onClick={handlePrev}
            className={`${currentIndex !== 0 ? 'block' : 'hidden'} text-primary`}
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className={`${currentIndex !== questions.length - 1 ? 'block' : 'hidden'} call-to-action`}
          >
            Next
          </button>
          <button
            className={`${currentIndex === questions.length - 1 ? 'block' : 'hidden'} call-to-action`}
            onClick={handleAnswerSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }else{
    return(
      <Result result={resultStrand} event={handleReset}/>
    )
  }
}

export default TestPage
