function checkNumbers(event) {
    event.preventDefault(); // Impede o envio do formulário tradicional

    var input = document.getElementById("numbers").value;
    var numbersArray = input.split(','); // Divide a string em um array de números
    var result = '';

    // Itera sobre o array e verifica se o número é par ou ímpar
    numbersArray.forEach(function(num) {
        var trimmedNum = num.trim(); // Remove espaços em branco extras
        if (trimmedNum !== '') {
            var number = parseInt(trimmedNum);
            if (isNaN(number)) {
                result += `${trimmedNum} não é um número válido. <br>`;
            } else {
                result += `${number} é ${number % 2 === 0 ? 'par' : 'ímpar'}. <br>`;
            }
        }
    });

    // Exibe o resultado na página
    document.getElementById("resultado").innerHTML = result || "Por favor, digite números válidos.";
}