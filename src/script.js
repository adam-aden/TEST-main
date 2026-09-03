const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const imageA = "https://conomi.co/wp-content/uploads/2023/11/22470333_s.jpg"
const imageB = "https://familydoctor.org/wp-content/uploads/2025/09/shutterstock_300553067.jpg"
const imageC = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVViCGQoJ1TZi6nV7C3u6ATd01Riv9H_6Ye1ioIyaJpg&s=10"
const imageD = "https://4.bp.blogspot.com/-hfERADHXxFY/UC0W5ld-7lI/AAAAAAAADI0/mpOawYEF82A/s1600/anti-fast-food.jpg"
let img = document.getElementById("img")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")
let guide1 = document.getElementById("guide1")
let guide2 = document.getElementById("guide2")
let guide3 = document.getElementById("guide3")



document.getElementById("calculate-btn").addEventListener("click", function(){
   let img = document.getElementById("img")
   let img2 = document.getElementById("img2")
   let img3 = document.getElementById("img3")
   let img4 = document.getElementById("img4")
   guide1.style.display="none";
   guide2.style.display="none";
   guide3.style.display="none";
   const weight = parseFloat(weightInput.value);
   const height = parseFloat(heightInput.value);

   const heightM = height / 100;
   const bmi = weight / (heightM * heightM);
   let category = "";
   img.src = "";
   img2.src = "";
   img3.src = "";
   img4.src = "";


   if (bmi < 18.5) {
      category = "ผอมแห้ง";
      guide3.style.display = "block";
      img.src = imageA;
   } else if (bmi < 23) {
      category = "หุ่นดี";
      guide2.style.display = "block";
      img2.src = imageB;
   } else if (bmi < 25) {
      category = "อ้วน";
      guide1.style.display = "block";
      img3.src= imageC;
   } else {
      category = "อ้วนมาก";
      guide1.style.display = "block";
      img4.src = imageD;
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