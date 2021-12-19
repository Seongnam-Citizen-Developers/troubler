import { lastValueFrom } from 'rxjs'
import { ajax } from 'rxjs/ajax'

import { MasteryBook } from './types'

const MasteryBookDecodeURL = '/api/masteryBooks'

export async function getMasteryBook(code: string) {
  const urlWithCode = `${MasteryBookDecodeURL}/${code}`

  const response = await lastValueFrom(ajax.getJSON<MasteryBook>(urlWithCode))
  return response
}
