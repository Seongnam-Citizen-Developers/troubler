import { MasteryBook } from './types'

const MasteryBookDecodeURL = '/api/database/masterybooks/decode'

export async function getMasteryBook(code: string) {
  const urlWithCode = `${MasteryBookDecodeURL}/${code}`
  return await (await fetch(urlWithCode)).json() as MasteryBook
}
