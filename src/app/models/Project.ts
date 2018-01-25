import { GithubUser } from "./GithubUser";
import { Member } from "./Member";

export class Project {
    public extractMembers: Array<Member>
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public fecha_inicio: Date,
        public estado: string,
        public miembros: Array<any>
    ) { 
        this.extractMembers = new Array<Member>()
    }
}