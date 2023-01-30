function pesquisacep(){
    let cepfinal = document.getElementById('cep').value
     let validacep = /^[0-9]{8}$/
    if (cepfinal != "") {
        if (validacep.test(cepfinal)) {
            let script = document.createElement('script')
            script.src = 'https://viacep.com.br/ws/' + cepfinal + '/json/?callback=callback_name'
            document.body.appendChild(script)

        }
        else {
            alert('CEP Invalido')
            limparcampos()
        }
    }
    else {
        limparcampos()
    }
}
function callback_name(objetocep) {
    console.log('objetocep')
    if (!("erro" in objetocep)) {
        document.getElementById('rua').value = (objetocep.logradouro)
        document.getElementById('bairro').value = (objetocep.bairro)
        document.getElementById('Cidade').value = (objetocep.localidade)
        document.getElementById('UF').value = (objetocep.uf)
    }
    else {
        limparcampos()
        alert('CEP Invalido')
    }
    console.log('teste1')
}

function limparcampos() {
    document.getElementById('rua').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('Cidade').value = ""
    document.getElementById('UF').value = ""

}