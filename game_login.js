function add()
{
    player_1_name=document.getElementById("player_1_Name").value;
    player_2_name=document.getElementById("player_2_Name").value;

    localStorage.setItem("Player_1", player_1_name);
    localStorage.setItem("Player_2", player_2_name);

    window.location="game_page.html";
    
}