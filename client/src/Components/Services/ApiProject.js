import { BaseUrl } from './BaseUrl.js'
const baseUrl = BaseUrl()


export let getProjects = async () => {
  let results = await fetch(`${baseUrl}/projects`)
    .then((res) => {

      return res.json()
    })
    .then((ans) => {
      return ans
    })

  return results
}

export let getProject = async (id) => {
  let result = await fetch(`${baseUrl}/projects/${id}`)
    .then((res) => {

      return res.json()
    })
    .then((ans) => {
      return ans
    })

  return result
}



export const addProject = async (body) => {
 
 
  const res = await fetch(`${baseUrl}/projects`, {
    method: `post`,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((json) => {
      return json.json()
    })
    .then((data) => {
      return data
    })
  console.log(res)
}


export const updateProject = async (body, id) => {
  
  const res = await fetch(`${baseUrl}/projects/${id}`, {
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
//
export const deleteProject = async (id) => {



  const res = await fetch(`${baseUrl}/projects/${id}`, {
    method: `delete`,
    headers: { 'Content-Type': 'application/json' }
  })
    .then((json) => {
      return json.json()
    })
    .then((data) => {
      return data
    })
  console.log(res)
}


export const updateProjectTechnologies = async (project_id, id) => {
  console.log('upt')
  const res = await fetch(`${baseUrl}/projects/${project_id}/technologies/${id}`, {
    method: `put`,
    headers: { 'Content-Type': 'application/json' }
  })
    .then((json) => {
      return json.json()
    })
    .then((data) => {
      return data
    })
  console.log(res)

}