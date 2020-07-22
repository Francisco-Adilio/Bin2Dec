function converter() {
    var binary = document.querySelector("#binary").value.split('')
    document.querySelector("#decimal").value

    for(var i = 0; i <= binario.length; i++) {
        if(binary[i] > 1 || binary.length > 8) {
            alert('Enter an 8-digit number with only 0 and 1')
            break
        } else {
            var values = 0
            for(var i = 0; i <= binario.length; i++) {
                values = 2 ** i * binary[i] + values
            }
            console.log(values)
        }
    }
}