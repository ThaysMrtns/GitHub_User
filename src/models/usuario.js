class Usuario{
    //Propriedades do usuário
    constructor(userName, bio){
        this._userName = userName;
        this._bio = bio;
    }
    //Retorna uma cópia dos dados do usuário
    get retornaUsuario(){
        return {
            userName: this._userName,
            bio: this._bio
        };
    }
}