export class Member {
    private name: string
    private specialty: string
    private aboutDescription: string
    private followers: number
    private pictureUrl: string
    constructor(name: string, specialty: string, aboutDescription: string, followers: number, pictureUrl: string) {
        this.name = name
        this.specialty = specialty
        this.aboutDescription = aboutDescription
        this.followers = followers
        this.pictureUrl = pictureUrl
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

    /**
     * get Followers
     */
    public get Followers(): number {
        return this.followers
    }

    /**
     * set Followers
     */
    public set Followers(followers: number) {
        this.followers = followers
    }
}