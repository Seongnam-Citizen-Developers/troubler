import { AzureFunction, Context, HttpRequest } from '@azure/functions'
import fetch from 'node-fetch'

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const MasteryBookDecodeURL = 'http://13.209.179.168:9000/decode'
  const urlWithCode = `${MasteryBookDecodeURL}/${req.params.code}`

  try {
    const response = await (await fetch(urlWithCode)).json()

    context.res = {
      // status: 200, /* Defaults to 200 */
      body: response,
    }
  } catch (e) {
    console.log('asjfosejaoisaefj', e)
    context.res = {
      status: 404,
      body: 'NOT FOUND',
    }
  }
}

export default httpTrigger
