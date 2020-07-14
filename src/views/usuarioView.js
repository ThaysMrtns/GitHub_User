class UsuarioView{
    templateUsuario(usuario){
        return `<div>
            <h1>${usuario.userName}</h1>
            <p>${usuario.bio}</p>
        </div>`;
    }
}