
async function askAI(){

const question =
document.getElementById("question").value;

const response = await fetch(
  https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AQ.Ab8RN6JqFQv0LLSiDKGxYdfNEvVYLBlH6C_xZi6EISIn_Zs4LQ,

{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[
{
parts:[
{
text:question
}
]
}
]
})
}
);

const data = await response.json();

document.getElementById("answer").innerHTML =
data.candidates[0].content.parts[0].text;

}
let score = 0;

function checkAnswer(answer){
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
1,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(300,300);

document.getElementById("cube3d")
.appendChild(renderer.domElement);

const geometry =
new THREE.BoxGeometry();

const material =
new THREE.MeshBasicMaterial({
color:0x007bff,
wireframe:true
});

const cube =
new THREE.Mesh(
geometry,
material
);

scene.add(cube);

camera.position.z = 3;

function animate(){

requestAnimationFrame(
animate
);

cube.rotation.x += 0.01;

cube.rotation.y += 0.01;

renderer.render(
scene,
camera
);

}

animate();
  function speakAnswer(){

let answer =
document.getElementById("answer").innerText;

let speech =
new SpeechSynthesisUtterance(answer);

speechSynthesis.speak(speech);
function startListening(){

const recognition =
new webkitSpeechRecognition();

recognition.lang = "en-US";

recognition.start();

recognition.onresult = function(event){

document.getElementById("question").value =
event.results[0][0].transcript;

};

}
function toggleDarkMode(){

document.body.classList.toggle(
"dark-mode"
);

}
function showSubject(subject){

let content = "";

if(subject==="Physics"){
content =
"Physics deals with matter, energy and forces.";
}

else if(subject==="Chemistry"){
content =
"Chemistry studies substances and their reactions.";
}

else if(subject==="Biology"){
content =
"Biology is the study of living organisms.";
}

else if(subject==="Mathematics"){
content =
"Mathematics deals with numbers and calculations.";
}

document.getElementById(
"subjectContent"
).innerHTML = content;

}    
}
if(answer==="Delhi"){

document.getElementById("quizResult").innerHTML =
"Correct Answer!";

score++;

}
else{

document.getElementById("quizResult").innerHTML =
"Wrong Answer!";

}

document.getElementById("score").innerHTML =
score;
document.getElementById("totalScore").innerHTML = score;

document.getElementById("progress").innerHTML = score * 10;
}
