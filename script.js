// PROFILE STORAGE

const nameEl = document.getElementById("name")
const gradeEl = document.getElementById("grade")
const photo = document.getElementById("photo")
const upload = document.getElementById("photoUpload")

nameEl.innerText = localStorage.getItem("name") || nameEl.innerText
gradeEl.innerText = localStorage.getItem("grade") || gradeEl.innerText
photo.src = localStorage.getItem("photo") || photo.src

nameEl.oninput = () => localStorage.setItem("name", nameEl.innerText)
gradeEl.oninput = () => localStorage.setItem("grade", gradeEl.innerText)

upload.onchange = () => {

const file = upload.files[0]
const reader = new FileReader()

reader.onload = () => {
photo.src = reader.result
localStorage.setItem("photo", reader.result)
}

if(file){
reader.readAsDataURL(file)
}

}


// PYTHON ENGINE

let pyodideReady = loadPyodide()

async function runPython(){

const pyodide = await pyodideReady

const n = parseInt(document.getElementById("number").value)

const choice = prompt(
"Would you like:\n1 → Normal Fibonacci\n2 → Mini Challenge (check number in Fibonacci)"
)

let checkNumber = 0

if(choice == "2"){
checkNumber = parseInt(prompt("Introduce number to check"))
}

let code = await fetch("initial.py").then(r => r.text())

pyodide.globals.set("n", n)
pyodide.globals.set("choice", parseInt(choice))
pyodide.globals.set("checkNumber", checkNumber)

let result = await pyodide.runPythonAsync(code)

document.getElementById("output").textContent = result

}

document.getElementById("run").onclick = runPython