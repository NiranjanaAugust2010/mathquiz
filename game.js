player1name=localStorage.getItem("player1name")
player2name=localStorage.getItem("player2name")

player1score=0
player2score=0
document.getElementById("player1name").innerHTML=player1name+" : "
document.getElementById("player2name").innerHTML=player2name+" : "

document.getElementById("player1score").innerHTML=player1score
document.getElementById("player2score").innerHTML=player2score

document.getElementById("playerquestion").innerHTML="question turn - "+player1name
document.getElementById("playeranswer").innerHTML="answer turn - "+player2name

function send (){
    num1=document.getElementById("no1").value  
    num2=document.getElementById("no2").value  
 actans=parseInt(num1)*parseInt(num2)
    

    qw="<h4 id='word_display'>Q."+num1+"X"+num2+"</h4>"
    ib="<br>answer: <input type='text' id='input_checkbox'>"
    cb="<br><br><button class='btn btn-info' onclick='check()'>check</button>"
    row=qw+ib+cb
    document.getElementById("output").innerHTML=row
    document.getElementById("no1").value=""
    document.getElementById("no2").value=""


}
questionturn="player1"
answerturn="player2"

function check(){
    answer=document.getElementById('input_checkbox').value
    if(answer==actans){
        if(answerturn=="player1"){
            player1score=player1score+1
            document.getElementById("player1score").innerHTML=player1score

        }
        else{
            player2score=player2score+1
            document.getElementById("player2score").innerHTML=player2score

        }
    }
    if(questionturn=="player1"){
        questionturn="player2"
        document.getElementById("playerquestion").innerHTML="questionturn- "+ player2name
    }
    else{
        questionturn="player1"
        document.getElementById("playerquestion").innerHTML="questionturn- "+ player1name 
    }

    if(answerturn=="player1"){
        answerturn="player2"
        document.getElementById("playeranswer").innerHTML="answerturn- "+ player2name
    }
    else{
        answerturn="player1"
        document.getElementById("playeranswer").innerHTML="answerturn- "+ player1name 
    }

    document.getElementById("output").innerHTML=""

}