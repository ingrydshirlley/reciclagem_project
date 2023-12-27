function realizarLogin() {
    console.log('Função realizarLogin foi chamada!');

    var nomeUsuario = document.querySelector('input[type="text"]').value;
    var senhaUsuario = document.querySelector('input[type="password"]').value;
    var mensagemErro = document.getElementById('mensagemErro');

    // Limpar mensagem de erro ao tentar novamente
    mensagemErro.textContent = '';

    if (nomeUsuario.trim() === '' || senhaUsuario.trim() === '') {
        mensagemErro.textContent = 'Preencha todos os campos.';
        setTimeout(function () {
            mensagemErro.textContent = '';
        }, 1000);

    } else if (nomeUsuario === 'ricardo' && senhaUsuario === 'senhaRicardo') {
        redirecionarParaPaginaPerfil('Ricardo', 'Ricardo', '../images/ricardo.png');

    } else if (nomeUsuario === 'ana' && senhaUsuario === 'senhaAna') {
        redirecionarParaPaginaPerfil('Ana', 'Ana', '../images/ana.jpeg');

    } else {
        mensagemErro.textContent = 'Credenciais inválidas. Tente novamente.';
        setTimeout(function () {
            mensagemErro.textContent = '';
        }, 1000);
    }
}

function redirecionarParaPaginaPerfil(nome, arroba, imagem) {
    // Redirecionar para a página do perfil
    window.location.href = '../pages/perfil.html';

    // Definir informações do perfil na sessão local
    sessionStorage.setItem('nomeUsuario', nome);
    sessionStorage.setItem('arrobaUsuario', arroba);
    sessionStorage.setItem('imagemUsuario', imagem);
}
