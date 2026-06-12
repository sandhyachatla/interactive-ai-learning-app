
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
