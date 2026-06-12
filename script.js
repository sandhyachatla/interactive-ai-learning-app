console.log("Interactive AI Learning App");
function askAI(){

let question =
document.getElementById("question").value;

let answer = "";

if(question.toLowerCase().includes("photosynthesis")){
answer =
"Photosynthesis is the process by which plants make food using sunlight.";
}

else if(question.toLowerCase().includes("newton")){
answer =
"Newton's First Law states that an object remains at rest or in motion unless acted upon by an external force.";
}

else{
answer =
"AI Tutor is still learning. More topics will be added soon.";
}

document.getElementById("answer").innerHTML = answer;

}
