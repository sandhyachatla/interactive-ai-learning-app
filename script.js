let score = 0;

// ================= AI TUTOR =================
async function askAI() {
  const question = document.getElementById("question").value;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: question }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    const answer =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response received";

    document.getElementById("answer").innerText = answer;

  } catch (error) {
    document.getElementById("answer").innerText =
      "Error connecting to AI";
  }
}

// ================= SPEECH =================
function speakAnswer() {
  let text = document.getElementById("answer").innerText;
  let speech = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
}

function startListening() {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";

  recognition.start();

  recognition.onresult = function (event) {
    document.getElementById("question").value =
      event.results[0][0].transcript;
  };
}

// ================= DARK MODE =================
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// ================= SUBJECTS =================
function showSubject(subject) {
  let content = "";

  if (subject === "Physics") {
    content = "Physics deals with matter, energy and forces.";
  } else if (subject === "Chemistry") {
    content = "Chemistry studies substances and their reactions.";
  } else if (subject === "Biology") {
    content = "Biology is the study of living organisms.";
  } else if (subject === "Mathematics") {
    content = "Mathematics deals with numbers and calculations.";
  }

  document.getElementById("subjectContent").innerText = content;
}

// ================= NOTES DOWNLOAD =================
function downloadNotes() {
  let text = document.getElementById("subjectContent").innerText;

  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", "notes.txt");

  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

// ================= LOGIN SYSTEM =================
function signup() {
  let username = document.getElementById("username").value;

  localStorage.setItem("user", username);

  document.getElementById("loginMessage").innerText =
    "Signup Successful!";
}

function login() {
  let username = document.getElementById("username").value;
  let savedUser = localStorage.getItem("user");

  if (username === savedUser) {
    document.getElementById("loginMessage").innerText =
      "Login Successful!";
  } else {
    document.getElementById("loginMessage").innerText =
      "User not found!";
  }
}

// ================= QUIZ =================
function checkAnswer(answer) {
  const correct = "Delhi";

  if (answer === correct) {
    document.getElementById("quizResult").innerText =
      "Correct Answer!";
    score++;
  } else {
    document.getElementById("quizResult").innerText =
      "Wrong Answer!";
  }

  document.getElementById("score").innerText = score;
  document.getElementById("totalScore").innerText = score;
  document.getElementById("progress").innerText = score * 10;

  load3D(); // show cube after answer
}

// ================= 3D CUBE (FIXED) =================
let scene, camera, renderer, cube;
let cubeCreated = false;

function load3D() {
  if (cubeCreated) return; // prevent duplicates

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(300, 300);

  document.getElementById("cube3d").appendChild(renderer.domElement);

  let geometry = new THREE.BoxGeometry();

  let material = new THREE.MeshBasicMaterial({
    color: 0x007bff,
    wireframe: true
  });

  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 3;

  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
  cubeCreated = true;
}
