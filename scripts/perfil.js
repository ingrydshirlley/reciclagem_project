document.addEventListener('DOMContentLoaded', function () {
    // Recuperar informações do perfil da sessão local
    var nomeUsuario = sessionStorage.getItem('nomeUsuario');
    var arrobaUsuario = sessionStorage.getItem('arrobaUsuario');
    var imagemUsuario = sessionStorage.getItem('imagemUsuario');

    // Atualizar o conteúdo da página com as informações do perfil
    if (nomeUsuario && arrobaUsuario && imagemUsuario) {
        document.getElementById('nomeUsuario').textContent = nomeUsuario;
        document.getElementById('arrobaUsuario').textContent = arrobaUsuario;
        document.getElementById('imagemUsuario').src = imagemUsuario;
    }
});