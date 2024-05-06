import React from 'react'
import { useLocation} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './HomeMainbar.css'
import QuestionList from './QuestionList'


const HomeMainbar = () => {


  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();


  const questionsList = useSelector((state) => state.questionsReducer)

  // console.log(questionsList)
  // var questionsList=[
  //   {
  //     _id: '1',
  //     Votes: 1,
  //     downVotes: 2,
  //     noOfAnswers:1,
  //     questionTitle: "what is a function",
  //     questionBody: "it meant to be ",
  //     questionTags:[
  //     "css",
  //     "express",
  //     "firebase",
  //     "html",
  //     "java",
  //     "javascript",
  //     "mern",
  //     "mongodb",
  //     "reactjs",],
  //     uaerPosted:"mono",
  //     userId: 1,
  //     askedOn:"jan 2",
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnswerd:"abhi",
  //       answerredOn:"jan 2",
  //       userId:2,
  //     }]
  //   },
  //   {
  //     _id: '2',
  //     Votes: 2,
  //     downVotes: 3,
  //     noOfAnswers: 2,
  //     questionTitle: "what is a function",
  //     questionBody: "it meant to be ",
  //     questionTags:[
  //     "css",
  //     "express",
  //     "firebase",
  //     "html",
  //     "java",
  //     "javascript",
  //     "mern",
  //     "mongodb",
  //     "reactjs",],
  //     uaerPosted:"mono",
  //     userId:1,
  //     askedOn:"jan 2",
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnswerd:"abhi",
  //       answerredOn:"jan 2",
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     _id: '3',
  //     Votes: 3,
  //     downVotes: 4,
  //     noOfAnswers: 3,
  //     questionTitle: "what is a function",
  //     questionBody: "it meant to be ",
  //     questionTags:[
  //     "css",
  //     "express",
  //     "firebase",
  //     "html",
  //     "java",
  //     "javascript",
  //     "mern",
  //     "mongodb",
  //     "reactjs",],
  //     uaerPosted:" mono",
  //     userId: 1,
  //     askedOn:"jan 2",
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnswerd:"abhi",
  //       answerredOn:"jan 2",
  //       userId: 2,
  //     }]
  //   }
  // ]
  
  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question")
      navigate("/Auth")
    } else {
      navigate("/AskQuestion")
    }
  }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
      { 
      location.pathname === "/" ? ( <h1>Top Questions</h1>) : ( <h1>All Questions</h1> )
      } 
      <button onClick={checkAuth} className="ask-btn">Ask Question</button>
      </div> 
      <div>

      { questionsList.data === null ? 
          <h1>Loading...</h1> :
          <>
          <p>{questionsList.data.length} questions</p>
             <QuestionList questionsList={questionsList.data }/>
            
          </>
    }
      </div>
    </div>      
  )
}

export default HomeMainbar
