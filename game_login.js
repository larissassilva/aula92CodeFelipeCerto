var actual_answer =0;
player1_name = localStorage.getItem("player1Name");
player2_name = localStorage.getItem("player2Name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1Name").innerHTML = player1_name + " : ";
document.getElementById("player2Name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Turno de Pergunta: " + player1_name ;
document.getElementById("player_answer").innerHTML = "Turno de Resposta: " + player2_name ;


document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2_name ;

function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 +"</h4>";
    input_box = "<br>Resposta: <input type = 'text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn info' onclick='check()'>Checar</button>";
    row = question_number + input_box + check_button ;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Turno de pergunta - " + player2_name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Turno de pergunta - " + player1_name;
    }

    if (answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Turno de resposta - " + player2_name;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Turno de resposta - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}