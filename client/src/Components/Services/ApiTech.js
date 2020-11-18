import { BaseUrl } from './BaseUrl.js'
const baseUrl = BaseUrl()




export let getTechnologies = async (type) => {
  let results = await fetch(`${baseUrl}/technologies`)
    .then((res) => {

      return res.json()
    })
    .then((ans) => {
      return ans
    })

  return type, results
}