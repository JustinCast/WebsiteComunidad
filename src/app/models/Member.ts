export class Member {
    private nombre: string
    private apellidos: string
    private especialidad: string
    private github_user: string
    constructor(
        nombre: string,
        apellidos: string,
        especialidad: string,
        github_user: string
    ){
        this.nombre = nombre
        this.apellidos = apellidos
        this.especialidad = especialidad
        this.github_user = github_user
    }
}