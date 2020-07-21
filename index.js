function converter() {
    var binario = document.querySelector("#binario").value.split('')
    var decimal = document.querySelector("#decimal")

    var soma = 0
    for(var i = 0; i <= binario.length; i++) {
    soma += binario[i]
        if(soma > binario.length || binario.length > 8) {
            alert('Para funcionar coloque até 8 digitos de 0 e 1')
        } else {
            for(var i = 0; i <= binario.length; i++) {
                var valores = 0
                valores = 2 ** i * binario[i] + valores
            }
        }
    } 
}