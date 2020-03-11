//Variables

const timerDOM = document.querySelectorAll(".digit");

//timerDOM[4]
let msTens = 0;

//timerDOM[3]
let msHundreds = 0;

//timerDOM[1]
let secondOnes = 0;

//timerDOM[0]
let secondTens = 0;

const logData = () => {
  console.log(msTens);
};

//Timer function
const startTimer = () => {
  if (secondTens === 1) {
    //Set red color
    //Clear timer
    console.log("Timer DONE");
  } else {
    let msInt = setInterval(() => {
      if (msTens === 9) {
        msTens = 0;
        // logData();
        timerDOM[4].textContent = msTens;
      } else {
        msTens++;
        // logData();
        timerDOM[4].textContent = msTens;
      }
    }, 10);
    let msHundredsInt = setInterval(() => {
      if (msHundreds === 9) {
        msHundreds = 0;
        // logData();
        timerDOM[3].textContent = msHundreds;
      } else {
        msHundreds++;
        // logData();
        timerDOM[3].textContent = msHundreds;
      }
    }, 100);
    let secondInt = setInterval(() => {
      if (secondOnes === 9) {
        secondOnes = 0;
        // logData();
        timerDOM[1].textContent = secondOnes;
      } else {
        secondOnes++;
        // logData();
        timerDOM[1].textContent = secondOnes;
      }
    }, 1000);
    let secondTensInt = setInterval(() => {
      clearInterval(msInt);
      clearInterval(msHundredsInt);
      clearInterval(secondInt);
      msTens = 0;
      msHundreds = 0;
      secondOnes = 0;
      secondTens = 1;
      timerDOM[1].textContent = secondOnes;
      timerDOM[4].textContent = msTens;
      timerDOM[3].textContent = msHundreds;
      timerDOM[0].textContent = secondTens;
      // Change to red
      //   timerDOM[].classList.add("mystyle");
      for (let i = 0; i < timerDOM.length; i++) {
        timerDOM[i].classList.add("redDigit");
      }
      clearInterval(secondTensInt);
    }, 10000);
  }
};

startTimer();
// console.log(timerDOM);
