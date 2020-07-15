class UsuarioView{
    templateUsuario(usuario){
        return `<div>
            <h1>${usuario.name}</h1>
            <p>${usuario.bio}</p>
            <p>${usuario.location}</p>
            <a href="${usuario.urlRepositorio}">Perfil GitHub</a>
        </div>`;
    }
}