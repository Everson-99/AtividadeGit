function calcularIdade() {
    var nascimento = document.getElementById('nascimento').value;
    var atual = document.getElementById('atual').value;
    var idade = atual - nascimento;
    document.getElementById('resultado').innerHTML = 'Sua idade é: ' + idade + ' anos';
}