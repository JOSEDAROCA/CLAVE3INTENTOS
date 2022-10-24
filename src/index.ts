import "./styles.css";

//let clave: string = "";
let contador: number = 1;
const clave: string = document.getElementById("clave");
const resultado = document.getElementById("resultado");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let claveIngresada = clave.value;
  console.log(claveIngresada);
  if (claveIngresada === "e") {
    console.log("bienvenido");
    alert("bienvenido");
    resultado.innerText = "bienvenido";
  } else if (claveIngresada !== "e" && Number(contador <= 3)) {
    contador++;
    console.log("Reingresa Clave");
    alert("Reingresa Clave");
  } else  (contador = 3) {
    console.log("Se Bloqueo su Clave");
    alert("Se Bloqueo su Clave");
  }
});
