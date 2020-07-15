class Usuario{
    //Propriedades do usuário
    constructor(name, photo, bio, location, urlRepositorio){
        this._name = name;
        this._photo = photo;
        this._bio = bio;
        this._location = location;
        this._urlRepositorio = urlRepositorio;
    }
    //Retorna uma cópia dos dados do usuário
    get retornaUsuario(){
        return {
            name: this._name,
            photo: this._photo,
            bio: this._bio,
            location: this._location,
            urlRepositorio: this._urlRepositorio
        };
    }
}