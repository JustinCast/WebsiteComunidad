import { GithubUser } from "./GithubUser";

export class Project {
    name: string
    members: Array<GithubUser>
    description: string
    startDate: Date
    finishDate: Date

    constructor(
        name: string,
        members: Array<GithubUser>,
        description: string,
        startDate: Date,
        finishDate: Date
    ) { }
}