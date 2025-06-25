addEventListener("input", () => {
    converter()
})

function converter() {
    var binario = document.querySelector("#binario").value.split('').reverse()
    var boolean

    for(var i = 0; i <= binario.length; i++) {
        if(binario[i] > 1) {
            alert('Para funcionar coloque apenas algorismos de 0 e 1')
            document.querySelector("#binario").value = ''
            document.querySelector("#decimal").value = ''
            boolean = false
            break
        } else {
            var valores = 0
            for(var i = 0; i < binario.length; i++) {
                valores = 2 ** i * binario[i] + valores
            }
            boolean = true
        }
        break
    }

    if(boolean) {
        document.querySelector("#decimal").value = valores
    }
}