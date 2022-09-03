import React from "react";
import { useState } from "react";

const QuizComp = () => {
   
        var QuestionBank = [
            {
                Question: "Who is the founder of SAIL?",
                AnswerText: [
                    {Answer: "Davido Adeleke", isCorrect: false},
                    {Answer: "Senator Abiru Tokunbo", isCorrect: true},
                    {Answer: "Saheed Balogun", isCorrect: false},
                    {Answer: "Prof Wole Soyinka", isCorrect: false}
                ]
            },
            {
                Question: "Lagos East consists of Ikorodu, Kosofe, Epe, Somolu and ______?",
                AnswerText: [
                    {Answer: "Ibeju-Lekki", isCorrect: true},
                    {Answer: "Agege", isCorrect: false},
                    {Answer: "Ikeja", isCorrect: false},
                    {Answer: "Oshodi-Isolo", isCorrect: false}
                ]
            },
            {
                Question: "Lagos State have _______ Local goverment?",
                AnswerText: [
                    {Answer: "34", isCorrect: false},
                    {Answer: "15", isCorrect: false},
                    {Answer: "29", isCorrect: false},
                    {Answer: "20", isCorrect: true}
                ]
            },
            {
                Question: "Who's the father of technology in Lagos?",
                AnswerText: [
                    {Answer: "Elon Musk", isCorrect: false},
                    {Answer: "Senator Abiru Tokunbo", isCorrect: true},
                    {Answer: "Saheed Balogun", isCorrect: false},
                    {Answer: "Kolawole Segun", isCorrect: false}
                ]
            },
            {
                Question: "The process of diversifying from other profession into Tech is called ________?",
                AnswerText: [
                    {Answer: "Professionalization", isCorrect: false},
                    {Answer: "Adaptation", isCorrect: false},
                    {Answer: "SAIL-Effect", isCorrect: true},
                    {Answer: "Locomotion", isCorrect: false}
                ]
            },
            {
                Question: "If you love Tech, you must ______?",
                AnswerText: [
                    {Answer: "Love to Sleep", isCorrect: false},
                    {Answer: "Love Abiru", isCorrect: true},
                    {Answer: "Love Food", isCorrect: false},
                    {Answer: "Love Party", isCorrect: false}
                ]
            },

            {
                Question: "Senator Abiru is best known for ______?",
                AnswerText: [
                    {Answer: "Doing Good and Creating Values", isCorrect: true},
                    {Answer: "tweeting post", isCorrect: true},
                    {Answer: "Sharing derica of rice", isCorrect: false},
                    {Answer: "Giveaway on Instagram", isCorrect: false}
                ]
            }
        ]
        // usestate Hook
        const[currentQuestion, setCurrentQuestion]= useState(0);
        const[score, setScore]= useState(0);
        const[showScore, setShowscore] = useState(false);

        // console.log(QuestionBank)

        const handleAnswerResponse = (isCorrect) =>{
            if(isCorrect){
                setScore(score+1);
            }

            const nextQuestion = currentQuestion+1;
            if(nextQuestion<QuestionBank.length){
                setCurrentQuestion(nextQuestion)
            }
            else{
                setShowscore(true)
            }
        }

        return(
        <div>
            {showScore?(
                <div>
                    Your have scored {score} out of {QuestionBank.length}
                </div>
            )
            :(
                <>
                <div>
                    
                    <div>
                        <span>{currentQuestion} </span>/{QuestionBank.length}
                    </div>
                    <div>
                        {QuestionBank[currentQuestion].Question}
                    </div>
                </div>

                <div>
                    {QuestionBank[currentQuestion].Answers.map((answer)=>
                    (
                        <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                    ))}
                </div>
                </>
            )
            }
        </div>
    )
}

export default QuizComp;