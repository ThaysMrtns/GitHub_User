class UsuarioController{
    constructor(){
        
    }
    //Requisição de dados da API para o nosso usuário
    get pegarDados(){
        let $ = document.querySelector.bind(document);
        let button = $('.btn');
        let userName = $('.campo-texto');
        let divUsuario = $('.usuario');
        
        button.onclick = () => {
            //Efetuar requisição
            let requisicao = new XMLHttpRequest();
            requisicao.open("GET", `https://api.github.com/users/${userName.value}`, false);
            requisicao.send();
            let dados = JSON.parse(requisicao.responseText);

            //Guardar os dados buscados dentro de um objeto instanciado pela model usuário
            let usuario = new Usuario(dados.name, dados.bio, dados.location, dados.html_url);

            //Pegar os dados do model usuario e apresentá-los na view
            let viewUsuario = new UsuarioView();
            divUsuario.innerHTML = viewUsuario.templateUsuario(usuario.retornaUsuario);
        }
    }
}
let user = new UsuarioController();
user.pegarDados;

