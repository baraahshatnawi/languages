alert("Welcome!Here is your chance to satisfy your CURIOSITY!")
alert("You are in BARAAH's Website")

let ready = prompt("ARE YOU READY?")

alert(ready)
if (ready == 'yes') {
  alert('Then here we GO!')
}
else {
  alert('WHY ARE HERE!')
}

alert("There are 6,500 languages spoken in the world today. Each and every one of them make the world a diverse and beautiful place")

let answer = prompt("How many languages are there in the world?")

var correctAnswer = '6,500'

while (answer != correctAnswer) {
  answer = prompt("How many languages are there in the world?   ")
}

let x = prompt("How many time the Languages picture should be inserted on the page in order to count them?") 

while(x<10){
x = prompt("How many time the Languages' picture should be inserted on the page in order to count them? ;)") 
}
for(var i=0;i<10;i++){
  document.write ("<img src ='http://electrastreet.net/wp-content/uploads/2015/04/hello-wordle.png?fa7b5c' Height= '50px' Width= '50px'/>")
}

let quiz = prompt('Now how many language are most spoken in the world? Five attempts ONLY!')

let rightAnswer = '12'

let attempt = '5'

for(let i=0;i<attempt;i++){
  if(quiz != rightAnswer){
    quiz = prompt('Now how many language are most spoken in the world? Five attempts ONLY!')  
  }
  else{
  alert('GOOD JOB!')
  break;
  }
}









