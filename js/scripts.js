function quizBoard(){


  var one = document.querySelector('input[name="ans1"]:checked').value;
  var two = document.querySelector('input[name="ans2"]:checked').value;
  var three = document.querySelector('input[name="ans3"]:checked').value;
  var four = document.querySelector('input[name="ans4"]:checked').value;
  var five = document.querySelector('input[name="ans5"]:checked').value;
  var count = 0;

  if(one === "4"){
    count +=20;
  }

  if(two === "4"){
    count +=20;
    }

  if(three === "4"){
    count +=20;
    }

  if(four === "1"){
    count +=20;
  }

  if(five === "1"){
    count +=20;
  }

  console.log(count)

  document.getElementById("submit").style.visibility="visible";
  document.getElementById("count").innerHTML= "You got " +count+ " %";

}
