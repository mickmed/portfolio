import { BaseUrl } from './BaseUrl.js'
const baseUrl = BaseUrl()




export let getTechnologies = async () => {
  let results = await fetch(`${baseUrl}/technologies`)
    .then((res) => {

      return res.json()
    })
    .then((ans) => {
      return ans
    })

  return results
}

export const updateTechnology = async (body, id) => {
  
  const res = await fetch(`${baseUrl}/technologies/${id}`, {
    method: `put`,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((json) => {
      return json.json()
    })
    .then((data) => {
      return data
    })

}

