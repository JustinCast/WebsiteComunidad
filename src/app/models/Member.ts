export class Member {
    private nombre: string
    private apellidos: string
    private especialidad: string
    private github_user: string
    private _id: string
    constructor(
        nombre: string,
        apellidos: string,
        especialidad: string,
        github_user: string,
        _id: string
    ){
        this.nombre = nombre
        this.apellidos = apellidos
        this.especialidad = especialidad
        this.github_user = github_user
        this._id = _id
    }

    
    public get Nombre() : string {
        return this.nombre
    }

    
    public set Nombre(nombre : string) {
        this.nombre = nombre;
    }

    
    public get Apellidos() : string {
        return this.apellidos
    }

    
    public set Apellidos(apellidos : string) {
        this.apellidos = apellidos;
    }
    
    
    public get Especialidad() : string {
        return this.especialidad
    }

    
    public set Especialidad(especialidad : string) {
        this.especialidad = especialidad;
    }
    
    
    public get GithubUser() : string {
        return this.github_user
    }

    
    public set GithubUser(github_user : string) {
        this.github_user = github_user;
    }
    
    
    public get ID() : string {
        return this._id
    }

    
    public set ID(ID : string) {
        this._id = ID;
    }
        
}