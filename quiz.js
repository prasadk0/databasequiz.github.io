
const quizDB = [{
    question:" What is the full form of DBMS?",
    a:"Data of Binary Management System",
    b:"Database Management System",
    c:"Database Management Service",
    d:"Data Backup Management System",
    ans:"ans2"
},
{
  question:"Who created the first DBMS",
   a:"Edgar Frank Codd",

   b:"Charles Bachman",
   c: "Charles Babbage",
   d: "E.F.codd",
   ans:"ans4"
},
{
  question:"  DBMS is a set of __________ to access the data",
  a:"Codes",
  b:"Programs",
  c:"information",
  d:"Metadata",
  ans:"ans2"
},
{
  question:" Inner join returns.........",
  a:"Data of both the tables",
  b:"Data of matched join condition",
  c:"Nothing",
  d:"All depends",
  ans:"ans2"
},
{
  question:" Can We create a view of unexisting table?",
  a:"give compile time error",
  b:"May be",
  c:"No",
  d:"yes",
  ans:"ans4"
},
{
  question:" which one is not type of join ?",
  a:"True join",
  b:"Outer join",
  c:"left Outer join",
  d:"left join",
  ans:"ans1"
},
{
  question:" What is the full form of DBMS?",
  a:"Data of Binary Management System",
  b:"Database Management System",
  c:"Database Management Service",
  d:"Data Backup Management System",
  ans:"ans2"
},
{
  question:" Foreign key references from ?",
  a:"Primary key",
  b:"unique key",
  c:"Candidate Key",
  d:"Super key",
  ans:"ans1"
},
{
  question:" DDL stands for?",
  a:"Data define Language",
  b:"Database data language",
  c:"Database defination language",
  d:"Data manipulation language",
  ans:"ans3"
},
{
  question:" coalasce() function returns?",
  a:"First Null value from values",
  b:"first not Null value",
  c:"convert value into calorie",
  d:"Null",
  ans:"ans2"
},
{
  question:" Why we use database?",
  a:"Store large amount of data",
  b:"just for sake of study",
  c:"to manage and store data efficiently",
  d:"None of this",
  ans:"ans1"
}
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore =  document.querySelector('#showscore');
const showArea =  document.querySelector('.scorearea');

let questionCount = 0;
let score=0;
const loadQuestion = ()=>{
       const questionList = quizDB[questionCount]
     question.innerText=questionList.question;
     option1.innerText = questionList.a;
     option2.innerText = questionList.b;
     option3.innerText = questionList.c;
     option4.innerText = questionList.d;
     
     
}
const getCheckAnswer = ()=>{
  let answer ;
  answers.forEach((currAnsElem)=>{
    if(currAnsElem.checked){
      answer  = currAnsElem.id;
     
  

    }
   
  })
  return answer;
}
loadQuestion();
submit.addEventListener('click',()=>{
  const checkedAnswer  = getCheckAnswer();
  // console.log(checkedAnswer);
  if(checkedAnswer===quizDB[questionCount].ans){
    score++;
  }
  questionCount++;
  setTimeout(()=>{
    if(questionCount<quizDB.length){
      loadQuestion();
   
      // console.log("executed");
      
    }else{
      //need to think
      showScore.innerHTML=`
        <h3 class="key">You Scored ${score}/${quizDB.length}  ✌ </h3>
        <button class="btn"  onclick="location.reload()" >Do Again</button>
      `;
       showScore.classList.remove('scorearea');

    }
  },500)
 
  console.log(score);   
})


