export type MasteryBook = {
  Version: number
  RosterType: RosterType
  RosterKey: RosterKey
  RosterLevel: number
  Job: Job
  Mastery: MasteriesInCategory[]
}

type RosterType = string
type RosterKey = string
type Job = string

export type MasteriesInCategory = {
  Category: MasteryCategory
  Masteries: Mastery[]
}

type MasteryCategory = string

export type Mastery = {
  Name: string
  Cost: number
}
