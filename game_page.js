var player_1= localStorage.getItem("Player_1");
var player_2= localStorage.getItem("Player_2");

var player_1_score=0;
var player_2_score=0;

document.getElementById("Name_1").innerHTML=player_1+":"+player_1_score;
document.getElementById("Name_2").innerHTML=player_2+":"+player_2_score;

document.getElementById("Q_turn").innerHTML="Question_turn"+player_1;
document.getElementById("A_turn").innerHTML="Answer_turn"+player_2;

function send(){
    get_word=document.getElementById("Hajmola").value;
    word_low=get_word.toLowerCase();
    word_length=word_low.length;
    for(var i = 0; i<word_length; i+=2){
    new_word=word_low.charAt(i);
    word_low=word_low.replace(new_word,"_");
    }

    question="<h4 id= 'word_display' >Q. "+word_low+"</h4>";
    answerbox="<br>answer: <input type='text' id='inputcheckbox'>";
    check_button="<br><br><button class='btn btn-info'onclick='check()'> check</button>";
    document.getElementById("output").innerHTML=question+answerbox+check_button;
}