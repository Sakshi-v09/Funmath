var playing=false;
var score;
var action;
var timeremaining;
var correctAnswer;
//if we click start reset button
document.getElementById("startreset").onclick=
function(){
      //if we are playing 
      if(playing==true)
      {
        location.reload();//reload page
      }
      //if we are not playing
      else{
        //change mode to playing
       playing=true;
        //set score to zero
        score=0;
        document.getElementById("score_value").innerHTML=score;
        //show countdown box
        show("timeremaining");
        timeremaining=60;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        hide("gameover");
        //change button to reset
        document.getElementById("startreset").innerHTML="Reset Game";
        //start countdown
        startCountdown();
         //generate q and a
        generateQA();

      }

}
for(i=1;i<5;i++){
    document.getElementById("choice"+i).onclick=function(){
        if(playing==true){
            if(this.innerHTML==correctAnswer){
                score++;
                document.getElementById("score_value").innerHTML=score;
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                },1000)
                generateQA();
            }
            else{
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                },1000)
            }
        }
    }
}
        //reduce time by 1 sec in loops
            //if time left?
                //yes continue
                //no gameover
        //change button to reset
       
//if we click on answer box
    // if we are playing
        //correct?
            //yes
                //increase score
                //show correct box for 1 sec
                //generate new q and a
            //no
                //show try again for 1 sec
function startCountdown(){
    action = setInterval(function(){

        timeremaining-=1;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        if(timeremaining==0){
            //gameover
            stopCountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML="<p>Game Over</p><p>Your score is  "+score+".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById("startreset").innerHTML="Start Game";
        }
    },1000)

}
function stopCountdown(){
    clearInterval(action);
}
function hide(Id){
    document.getElementById(Id).style.display="none";
}
function show(Id){
    document.getElementById(Id).style.display="block";
}
function generateQA(){
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
    correctAnswer=x*y;
    document.getElementById("Question").innerHTML=x+"x"+y;
    var correctPosition=1+Math.round(3*Math.random());
    document.getElementById("choice"+correctPosition).innerHTML=correctAnswer;
    var answers=[correctAnswer];
    for(i=1;i<5;i++){
        if(i!=correctPosition)
        {
            var wrongAnswer;
            do{
            wrongAnswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
            
            }
            while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("choice"+i).innerHTML=wrongAnswer;
            answers.push(wrongAnswer);
        }

    }

}