// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Creado por David Aragon
// Lista para almacenar los nombres de amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputNombre = document.getElementById("amigo");
    const nombre = inputNombre.value.trim();

    console.log(`Intentando agregar el nombre: "${nombre}"`);

    // Validar la entrada
    if (nombre === "") {
        console.warn("No se puede agregar un nombre vacío.");
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Verificar si el nombre ya existe en la lista
    if (amigos.includes(nombre)) {
        console.warn(`El nombre "${nombre}" ya está en la lista.`);
        alert("El nombre ya está en la lista. Por favor, ingrese un nombre diferente.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);
    console.info(`Nombre "${nombre}" agregado correctamente. Lista actual:`, amigos);

    // Limpiar el campo de entrada
    inputNombre.value = "";

    // Actualizar la lista de amigos en la interfaz
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista actual

    amigos.forEach((amigo, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
        console.debug(`Amigo en posición ${index}: ${amigo}`);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        console.warn("No se puede realizar el sorteo porque la lista está vacía.");
        alert("La lista de amigos está vacía. Agregue al menos un nombre antes de sortear.");
        return;
    }

    // Elegir un nombre al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    console.info(`Sorteo realizado. Amigo secreto seleccionado: ${amigoSorteado}`);

    // Mostrar el resultado en la lista de resultados
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados anteriores

    const resultItem = document.createElement("li");
    resultItem.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(resultItem);
}
