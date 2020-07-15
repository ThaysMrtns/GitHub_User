class UsuarioView{
    templateUsuario(usuario){
        return `<div>
            <h1>${usuario.name}</h1>
            <img src="${usuario.photo}">
            <p>${usuario.bio}</p>
            <p>${usuario.location}</p>
            <a href="${usuario.urlRepositorio}">Perfil GitHub</a>
        </div>`;
    }
}