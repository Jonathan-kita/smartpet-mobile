export const cnpjMask = value => {
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{2})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 2 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1/$2')
        .replace(/(\d{4})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export const numeroMask = value => {
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
}

export const pesoMask = value => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d)(\d{1,2})$/, "$1,$2");
}

export const cepMask = value => {
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
}

export const celularMask = value => {
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/^(\d{2})(\d)/g, "($1) $2") //Coloca parênteses em volta dos dois primeiros dígitos
        .replace(/(\d{1})(\d{4})/, " $1 $2")    //Coloca espaço entre o primeiro dígito e o segundo dígito
        .replace(/(\d{4})(\d{4})/, " $1-$2")    //Coloca hífen entre o quarto e o quinto dígito
        .replace(/(-\d{4})\d+?$/, '$1')    //depois dos ultimos 4 dígitos nada mais é inserido
}

export const telefoneMask = value => {
    return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/^(\d{2})(\d)/g, "($1) $2") //Coloca parênteses em volta dos dois primeiros dígitos
        .replace(/(\d{4})(\d{4})/, " $1-$2")    //Coloca hífen entre o quarto e o quinto dígito
        .replace(/(-\d{4})\d+?$/, '$1')    //depois dos ultimos 4 dígitos nada mais é inserido
}

export const soLetraMask = value => {
    return value
        .replace(/[0-9]/, '') // substitui qualquer caracter que nao seja numero por nada
}

export const soLetraMMask = value => {
    return value
        .replace(/[^A-Z]/, '') // substitui qualquer caracter que seja o que está dentro de chaves por nada
}

export const moedaMask = value => {
    return value
        .replace(/\D/g, "") // permite digitar apenas numero
        .replace(/(\d{1})(\d{5})$/, "$1.$2") // coloca ponto antes dos ultimos 5 digitos
        .replace(/(\d{1})(\d{1,2})$/, "$1,$2") // coloca virgula antes dos ultimos 2 digitos
}

export const dataMask = value => {
    return value
        .replace(/-/g, "/") // permite digitar apenas numero

}

export const virgulaPontoMask = value => {
    return value
        .replace(/,/g, ".") // permite digitar apenas numero

}