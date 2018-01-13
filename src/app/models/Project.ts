import { Member } from "./Member";

export class Project {
    name: string
    members: Array<Member>
    description: string
    startDate: Date
    finishDate: Date

    constructor(
        name: string,
        members: Array<Member>,
        description: string,
        startDate: Date,
        finishDate: Date
    ) { }
}