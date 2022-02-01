import { Mastery } from "../Mastery/types"

type MasteryBook = {
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

type MasteriesInCategory = {
  Category: MasteryCategory
  Masteries: Mastery[]
}

type MasteryCategory = string

export { MasteryBook, MasteriesInCategory }