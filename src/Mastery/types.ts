type RosterType = string
type RosterKey = string
type Job = string

type MasteryCategory = string

type Mastery = {
  Name: string
  Cost: number
}

type MasteriesInCategory = {
  Category: MasteryCategory
  Masteries: Mastery[]
}

export type MasteryBook = {
  Version: number
  RosterType: RosterType
  RosterKey: RosterKey
  RosterLevel: number
  Job: Job
  Mastery: MasteriesInCategory[]
}
