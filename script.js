function askAI(){

let q=document.getElementById("question").value;

document.getElementById("answer").innerHTML=
"AI Explanation for: " + q;

}

function check(ans){

if(ans==="Delhi"){
document.getElementById("result").innerHTML=
"Correct Answer";
}
else{
document.getElementById("result").innerHTML=
"Wrong Answer";
}

}
