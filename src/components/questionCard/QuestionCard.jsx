import React, { useEffect, useState } from 'react'
import './QuestionCard.css'

const QuestionCard = ({questionData, score, setScore, count, setCount, modal,setModal}) => {

    const [timer,setTimer] = useState(30)

    const givenChoice = (e) => {
        console.log('e.target.value', e.target.value)
        const checkingAnswer = e.target.value === questionData[count]?.correct_answer
        console.log('checkingAnswer', checkingAnswer)
        if(checkingAnswer) {
            setScore(score + 100)
            
        }

        setCount(count+1)
        if(count === 9) {
            setModal(true)
        }
        setTimer(30)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(timer > 0) {
                setTimer(timer - 1)
            }
            if(timer === 0 && count < 10) {
                setCount(count + 1 )
                setTimer(30)
            } else if(count >= 10) {
                setModal(true)
            }
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [timer])

  return (
    <div className='q-card'>
        <div className='timer'>{timer}</div>
        <div className='title'>
            {count+1} / 10 - {questionData[count]?.question}
            <div>
            {
                questionData[count]?.answers?.map((answer, i) => (
                    <button onClick={givenChoice} key={i} value={answer} > {answer} </button>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default QuestionCard