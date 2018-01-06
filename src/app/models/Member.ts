export class Member {
    private name: string
    private lastName: string
    private specialty: string
    private aboutDescription: string

    constructor(name: string, lastName: string, specialty: string, aboutDescription: string) {
        this.name = name
        this.lastName = lastName
        this.specialty = specialty
        this.aboutDescription = aboutDescription
    }
    /**
     * get Name
     */
    public 
    public get Name() : string {
        return this.name
    }

    /**
     * set Name
     */
    public set Name(name: string) {
        this.name = name
    }

    /**
     * get LastName
     */
    public get LastName(): string {
        return this.lastName
    }

    /**
     * set LastName
     */
    public set LastName(lastName: string) {
        this.lastName = lastName
    }

    /**
     * get Specialty
     */
    public get Specialty(): string {
        return this.specialty
    }

    /**
     * set Specialty
     */
    public set Specialty(specialty: string) {
        this.specialty = specialty
    }

    /**
     * get AboutDescription
     */
    public get AboutDescription(): string {
        return this.aboutDescription
    }

    /**
     * set AboutDescription
     */
    public set AboutDescription(aboutDescription: string) {
        this.aboutDescription = aboutDescription
    }
}