//step1-- so we are going to check the right answers to compare 
//with users ansewrs later on
const correctAnswers = ['B', 'B', 'B','B'];
//step2--- we need attack eventlistener to form to check if user submit a form
const form = document.querySelector('.quiz-form');
//step 7
const result = document.querySelector('.result');

//step3-- adding event listener
form.addEventListener('submit', e =>{
  //step4-- prevent default action(remember default will refresh page
  //and we don`t want that)
  e.preventDefault();
  //step5-- we need to track users score, using "let" cuz might change in future
  let score = 0;
  //step6-- cheking users real answers inside the Array
  //we refrence "form" and then the name of particulat value"name attr"
  const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value ];//output A or B
  // now we can compare these with correct answers (ansewer is real value)
  userAnswers.forEach((answer, index) =>{
    if(answer === correctAnswers[index]){
        score += 25;
    }
  });
  //after submitting btn its goes on top   
  window.scrollTo(0,0);

//   //step 7 showing the score on screen
//   result.querySelector('span').textContent = `${score}%`;
  //step8 removing botstrap class
  result.classList.remove('d-none');

  //step 9
  let output = 0;
  const timer = setInterval(() =>{
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
        clearInterval(timer);
    } else{
        output++;
    }
},10);
});

//how to set an interval
// let i = 0;
// const timer = setInterval(() =>{
// i+++;
// if(i === 5){
//     clearInterval(timer);
// }
// }, 1000);