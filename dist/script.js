const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
let guide1 = document.getElementById("guide1")
let guide2 = document.getElementById("guide2")



document.getElementById("calculate-btn").addEventListener("click", function(){
   guide1.style.display="none";
   guide2.style.display="none";
   const weight = parseFloat(weightInput.value);
   const height = parseFloat(heightInput.value);

   const heightM = height / 100;
   const bmi = weight / (heightM * heightM);
   let category = "";
   if (bmi < 18.5) {
      category = "ผอมแห้ง";
      guide1.style.display = "block";
   } else if (bmi < 23) {
      category = "หุ่นดี";
      guide2.style.display = "block";
   } else if (bmi < 25) {
      category = "อ้วน";
      guide1.style.display = "block";
   } else {
      category = "อ้วนมาก";
      guide1.style.display = "block";
   }
   answer.innerText = category;


   document.getElementById("answer").innerText = `BMI: ${bmi.toFixed(2)} (${category})`;

});

let btn = document.getElementById("btn");
let hello = document.getElementById("hello");
let answer = document.getElementById("answer");

btn.addEventListener("click", function(){
   if (document.body.style.backgroundColor === "black"){
      document.body.style.backgroundColor = "white";
      hello.style.backgroundColor = "#7dba84";
      answer.style.backgroundColor = "#7dba84";
      btn.innerText = "dark mode";
   } else {
      document.body.style.backgroundColor = "black";
      hello.style.backgroundColor = "white";
      answer.style.backgroundColor = "white";
      btn.innerText = "white mode";
   }
});
