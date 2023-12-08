declare enum domain { "Web", "Connect", "Backend"}

declare interface Employee {
    name: string
    age: number
    skills: string[]
}

declare interface Intern extends Employee {}

declare interface Junior extends Employee {
    date_of_promotion: Date
    domain: domain
}

export interface Company {
    Interns: Intern[],
    Juniors: Junior[],
    Country: string | string[]
}