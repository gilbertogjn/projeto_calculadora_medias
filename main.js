const form = document.getElementById("form-atividade")
const inputNomeAtividade = document.getElementById("nome-atividade")
const inputNotaAtividade = document.getElementById("nota-atividade")
const corpoTabela = document.querySelector("tbody")
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrado"'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste"'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Digite a nota mínima'))

let linhas = ''

form.addEventListener("submit", function (e) {
    e.preventDefault()
    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha() {
    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida.`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))

        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`

        linhas += linha
    }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela() {
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    document.getElementById("media-final-valor").innerHTML = mediaFinal
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal() {
    let somaNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i]
    }

    return somaNotas / notas.length
}