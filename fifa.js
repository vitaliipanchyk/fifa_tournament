//General number of teams: 8
//4 play-off matches
// 2 semifinals
// final
//if someone will win all play-offs or both semifinals the script will say about it.


var VN = "Vitalii";
var AN = "Alex";

//info for the user
alert("Hello!\n\tThis programm is designed for a 8 teams Fifa Tournament between Vitalik and Alex and includes: 4 play-off matches, 2 semifinals and final.\n\tIf you win in penalties series just add one point to your team's result.\n\tPress OK to proceed.")

//Play-offs
//the first play-off
var V1 = prompt("Please, enter the 1st Vitalik's team");
var A1 = prompt("Please, enter the 1st Alex's team");
alert("The game to be played: " + V1 + " & " + A1 + ". Goodluck!");
var SC1 = prompt("Please, enter the score of the first game: " + V1 + " & " + A1);

if (SC1[0] > SC1[2]){
  var winner_team1 = V1;
  var winner_name1 = VN;
}
else{
  var winner_team1 = A1;
  var winner_name1 = AN;}
alert("Congratulations " + winner_name1 + "! " + winner_team1 + " goes to the next stage.");

//the second play off
var V2 = prompt("Please, enter the 2nd Vitalik's team");
var A2 = prompt("Please, enter the 2nd Alex's team");
alert("The game to be played: " + V2 + " & " + A2 + ". Goodluck!");
var SC2 = prompt("Please, enter the score of the second game: " + V2 + " & " + A2);

if (SC2[0] > SC2[2]){
  var winner_team2 = V2;
  var winner_name2 = VN;
}
else{
  var winner_team2 = A2;
  var winner_name2 = AN;
}
alert("Congratulations " + winner_name2 + "! " + winner_team2 + " goes to the next stage.");

//the third play-off
var V3 = prompt("Please, enter the 3rd Vitalik's team");
var A3 = prompt("Please, enter the 3rd Alex's team");
alert("The game to be played: " + V3 + " & " + A3 + ". Goodluck!");
var SC3 = prompt("Please, enter the score of the third game: " + V3 + " & " + A3);

if (SC3[0] > SC3[2]){
  var winner_team3 = V3;
  var winner_name3 = VN;
}
else{
  var winner_team3 = A3;
  var winner_name3 = AN;
}
alert("Congratulations " + winner_name3 + "! " + winner_team3 + " goes to the next stage.");

//the fourth play-off

var V4 = prompt("Please, enter the 4th Vitalik's team");
var A4 = prompt("Please, enter the 4th Alex's team");
alert("The game to be played: " + V4 + " & " + A4 + ". Goodluck!");
var SC4 = prompt("Please, enter the score of the 4th game: " + V4 + " & " + A4);

if (SC4[0] > SC4[2]){
  var winner_team4 = V4;
  var winner_name4 = VN;
} else{
  var winner_team4 = A4;
  var winner_name4 = AN;
}

//check if someone has already won the tournament
var VitaliiWon = (winner_name1 == VN && winner_name2 == VN && winner_name3 == VN && winner_name4 == VN);
var AlexWon = (winner_name1 == AN && winner_name2 == AN && winner_name3 == AN && winner_name4 == AN);

if (VitaliiWon){
  winner = VN;
  alert("Congratulation " + winner + " You have already won the tournament!");
}
else if (AlexWon) {
  winner = AN;
  alert("Congratulation " + winner + " You have already won the tournament!");
}
else{
//continue the tournament
alert("Congratulations " + winner_name4 + "! " + winner_team4 + " goes to the next stage.");
//semifinals
alert("The first semifinal to be played: " + winner_team1 + "(" + winner_name1 + ")  & " + winner_team2+ "(" + winner_name2 + ") Goodluck!")
var SC5 = prompt("Please, enter the score of the first semifinal: " + winner_team1 + " & " + winner_team2);
if (SC5[0] > SC5[2]){
  var finalist_team1 = winner_team1;
  var finalist_name1 = winner_name1;
}
else{
  var finalist_team1 = winner_team2;
  var finalist_name1 = winner_name2;
}
alert("Congratulations " + finalist_name1 + "! " + finalist_team1 + " goes to the final.");

alert("The second semifinal to be played: " + winner_team3 + "(" + winner_name3 + ")  & " + winner_team4+ "(" + winner_name4 + ") Goodluck!")
var SC6 = prompt("Please, enter the score of the second semifinal: " + winner_team3 + " & " + winner_team4);
if (SC6[0] > SC6[2]){
  var finalist_team2 = winner_team3;
  var finalist_name2 = winner_name3;
}
else{
  var finalist_team2 = winner_team4;
  var finalist_name2 = winner_name4;
}

//check if someone has already won the tournament
var VitaliiWon2 = (finalist_name1 == VN && finalist_name2 == VN );
var AlexWon2 = (finalist_name1 == AN && finalist_name2 == AN );

if (VitaliiWon2){
  winner2 = VN;
  alert("Congratulation " + winner2 + " You have already won the tournament!");
}
else if (AlexWon2) {
  winner2 = AN;
  alert("Congratulation " + winner2 + " You have already won the tournament!");
}
else{
//nobody won so far, we can proceed
alert("Congratulations " + finalist_name2 + "! " + finalist_team2 + " goes to the final.");
//final match
alert("The final match: " + finalist_team1 + "(" + finalist_name1 + ")  & " + finalist_team2+ "(" + finalist_name2 + ") Goodluck!")
var SC7 = prompt("Please, enter the score of the final: " + finalist_team1 + " & " + finalist_team2);
if (SC7[0] > SC7[2]){
  var ultimate_winner_team = finalist_team1;
  var ultimate_winner_name = finalist_name1;
}
else{
  var ultimate_winner_team = finalist_team2;
  var ultimate_winner_name = finalist_name2;
}
alert("Congratulations " + ultimate_winner_name + "! " + ultimate_winner_team + " just won the Fifa21 Tournament.");
}
}
