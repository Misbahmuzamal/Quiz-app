let questions=[
    {
        question:" What is the purpose of the this keyword in JavaScript?",
        answer:[
            {text:"To refer to the global object",correct:false},
            {text:"To refer to the current function ",correct:false},
            {text:"To refer to the current object",correct:true},
            {text:"To refer to the window object",correct:false}
        ]
    },
    {
        question:"Who was the first president of the United States?  ",
        answer:[
            {text:"George Washington ",correct:true},
            {text:"TAbraham Lincoln ",correct:false},
            {text:"Thomas Jefferson",correct:false},
            {text:" Franklin D. Roosevelt",correct:false}
        ]
    },
    {
        question:"What is the purpose of the map() method in JavaScript?",
        answer:[
            {text:"To filter an array",correct:false},
            {text:"To sort an array ",correct:false},
            {text:"To transform an array",correct:true},
            {text:"To reduce an array",correct:false}
        ]
    },
    {
        question:"  What is the difference between null and undefined in JavaScript?",
        answer:[
            {text:"null is a string, while undefined is a number",correct:false},
            {text:"null is an object, while undefined is a primitive value  ",correct:false},
            {text:"null represents a deliberate non-value, while undefined represents an uninitialized variable ",correct:true},
            {text:"null is used for functions, while undefined is used for variables",correct:false}
        ]
    },
]
let questionDisplay=document.querySelector("#question");
let answerDisplay=document.querySelector(".answer");
let nextbtn=document.querySelector('.click .next');
let score=0;
let currentQuestionIndex=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbtn.innerHTML='Next';
    showQuestion()
    nextbtn.addEventListener('click',function(){
        currentQuestionIndex++
        if(currentQuestionIndex<questions.length){
            showQuestion()
        }
        else{
            questionDisplay.innerHTML=`your score is ${score} out of ${questions.length}`;
            answerDisplay.innerHTML='';
            nextbtn.innerHTML="play again";
            nextbtn.addEventListener('click',startQuiz)
        }
    })
}
function showQuestion(){
    answerDisplay.innerHTML=''
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionDisplay.innerHTML = questionNo + '. ' + currentQuestion.question;
    currentQuestion.answer.forEach(answer => {
        let button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        button.addEventListener('click',()=>{
            if(answer.correct==true){
              button.dataset.correct=answer.correct;
              button.style.backgroundColor='green';
              button.style.color='white';
              button.style.border='none';
              score++;
              nextbtn.style.display="block"
            }
            else{
                button.style.backgroundColor='red';
                button.style.color='white';
                button.style.border='none';
            }

        })
                    
        answerDisplay.appendChild(button);

    });
}
startQuiz()