import React, { useState } from 'react'
import Dropdown from "../../components/dropdown/Dropdown"
import "./Introduce.css"
import { useNavigate } from 'react-router-dom'

const Introduce = () => {

  const difficulty =  ["easy", "medium", "hard"]
  const [difficultyChange, setDifficultyChange] = useState("easy")
  const TOTAL_QUESTION = 10
  const navigate = useNavigate()

  const startQuiz = () =>{
    if(difficultyChange) {
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTION}`)
    }
  }

  return (
    <div className='introduce'>
      <div className="intoduce-container">
        <img src="https://www.shutterstock.com/image-vector/quiz-logo-time-label-question-600w-2299277831.jpg" alt="" />
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
        <div onClick={startQuiz} id='btn' className='intoduce-btn'>BEGIN</div>
      </div>
    </div>
  )
}

export default Introduce