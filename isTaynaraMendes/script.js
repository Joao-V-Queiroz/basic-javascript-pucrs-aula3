function isTaynaraMendes() {
    var name = document.getElementById("name").value;
    console.log(name);

    if (name === "" || !isNaN(name)) {
        document.getElementById("resultado").innerHTML = "Por favor, digite um nome válido.";
        return;
    } else if (name === "Taynara Mendes") {
        document.getElementById("resultado").innerHTML = "Olá, Taynara Mendes!";
        return;
    } else {
        document.getElementById("resultado").innerHTML = "Olá, " + name + "!";
        return;
    }
}
