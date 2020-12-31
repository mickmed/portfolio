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


export let createTechnology = async (body) => {
  let results = await fetch(`${baseUrl}/technologies`, {
    method: `post`,
    body:JSON.stringify(body),
    headers: { 'Content-Type': 'application/json'},
  })
  .then((res)=>{
    return res.json()
  })
  .then((ans)=>{
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

export const deleteTechnology = async(id) => {
  const resp = await fetch(`${baseUrl}/technologies/${id}`,{
    method: `delete`,
    headers: {'Content-Type': 'application/json'}
  })
  .then(json=>{
    return json
  })
  .then(data=>{
    return data
  })
}

