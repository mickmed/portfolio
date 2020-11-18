// import { mapData } from "./dom_helper"
// import { cecl } from "./domHelper"

let BASE_URL = "http://localhost:3000"
// let BASE_URL = 'https://portfolio-mick.appspot.com'
// let BASE_URL = "https://portfolio-server-mick.herokuapp.com"

export let getResults = async (type) => {
  let results = await fetch(BASE_URL + "/" + "projects")
    .then((res) => {
      console.log(res.json)
      return res.json()
    })
    .then((ans) => {
      return ans
    })

  return type, results
}

export function setHeaders(headers) {
  if (localStorage.authToken) {
    return {
      ...headers,
      Authorization: `Bearer ${localStorage.authToken}`,
    }
  } else {
    return headers
  }
}

export function clearHeaders(headers) {
  return {
    ...headers,
    Authorization: null,
  }
}

export const signUp = async (body) => {
  console.log(JSON.stringify(body))
  let res = await fetch(BASE_URL + "/users", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((json) => {
      return json.json()
    })
    .then((data) => {
      localStorage.setItem("authToken", data.token)

      return data
    })
  return res
}

// export const login = async (body) => {
//   let res = await fetch(BASE_URL + "/auth/login", {
//     method: "post",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(body),
//   })
//     .then((json) => {
//       return json.json()
//     })
//     .then((data) => {
//       localStorage.setItem("authToken", data.token)

//       return data
//     })

//   return res
// }

// export const verify = async () => {
//   const token = localStorage.getItem("authToken")

//   if (token) {
//     const res = await fetch(BASE_URL + "/auth/verify", {
//       method: "get",
//       headers: setHeaders({
//         "Content-Type": "application/json",
//       }),
//     })
//       .then((json) => {
//         return json.json()
//       })
//       .then((data) => {
//         return data
//       })

//     return res
//   }

//   return false
// }


export const getCurrentUser = async () => {
  if (localStorage.getItem("authToken")) {
    console.log("here", localStorage.getItem("authToken"))
    let user = await verify()
    console.log(user)
    if (!user.errors) {
      // loginButton.innerText = "logout"
      // loggedIn = true
      return user
    }
  } else {
    // loginButton.innerText = "login"

    // loggedIn = false
    return false
  }
  console.log(loggedIn)
}

export const logout = async () => {
  localStorage.removeItem("authToken")
  clearHeaders({
    "Content-Type": "application/json",
  })
  return "logged out"
}



// export let mapData = (data, event) => {
//   // console.log('mapdata --> data', data)
//   let type = Object.keys(data)[0]
//   let relType = Object.keys(data)[1]
//   let currentDiv = makeCurrentDiv(type)
//   let makeNewBtn = makeElement('button', 'makeNew', currentDiv, { innerText: "Make New" })
//   makeNewBtn.addEventListener('click', (event) => {
//       let currentDiv = makeCurrentDiv(type)
//       let keys = Object.keys(data[Object.keys(data)[0]][0])
//       // console.log(keys)
//       let obj = {}
//       keys.forEach(key => {
//           obj[key] = key
//       })

//       let form = makeForm(obj, event)
//       let formButtons = newItemBtns(type, relType, obj, form)
//       let chkbxs = checkboxes(relType)
//       currentDiv.appendChild(form)
//   })

//   data[type].map(obj => {
//       let form = makeForm(obj)
//       let formButtons = makeFormBtns(type, obj, form, relType)
//       currentDiv.appendChild(form)
//   })
// }

// export const makeNewItem = async (event, type, obj, relType) => {
//   event.preventDefault()
//   // console.log('type,relType', type, relType)
//   let fields = Object.keys(obj)
//   let form = new FormData()

//   for (let i = 0; i < fields.length; i++) {
//     fields[i] !== "id" &&
//       fields[i] !== "created_at" &&
//       fields[i] !== "updated_at" &&
//       form.append(fields[i], document.querySelector("." + fields[i]).value)
//   }
//   //    console.log(form)
//   let chkboxs = document.querySelectorAll(".chkbox")
//   // console.log(chkboxs)
//   let files = document.querySelector("#" + type + "Img" + obj.id)

//   if (files && files.files.length !== 0) {
//     form.append("picture", files.files[0])
//   }

//   if (type === "projects") {
//     relType = "technology_ids[]"
//   } else {
//     relType = "project_ids[]"
//   }
//   if (chkboxs) {
//     chkboxs.forEach(cb => {
//       // console.log(cb.value)
//       if (cb.checked) {
//         // console.log(cb.value)
//         form.append(relType, cb.value)
//       }
//     })
//   }

//   const results = await fetch(BASE_URL + "/" + type, {
//     method: "post",
//     body: form
//   }).then(function(res) {
//     // console.log(res)
//     return res.json()
//   })
//   return results
// }

// export const destroyProject = async (event, e, type) => {
//   event.preventDefault()
//   // console.log('here')
//   await fetch(BASE_URL + "/" + type + "/" + e.id, {
//     method: "delete"
//   }).then(des => {
//     // console.log(des)
//     return des
//   })
//   let results = await getResults(type)
//   let res = await getResults(type)
//   // console.log(res)

//   mapData(res)
// }

// let pluralize = word => {
//   if (word.slice(-1) === "s") {
//     return word
//   }
//   if (word.slice(-1) === "y") {
//     return word.slice(0, -1) + "ies"
//   } else {
//     return word + "s"
//   }
// }
// let singularize = word => {
//   if (word.substr(word.length - 3) === "ies") {
//     // console.log('wow')
//     return word.slice(0, -3) + "y"
//   } else {
//     return word.slice(0, -1)
//   }
// }

// export const updateProject = async (event, obj, type, relType) => {
//   // console.log('obj, type', obj, relType)
//   event.preventDefault()
//   type = pluralize(type)
//   let fields = Object.keys(obj)
//   // console.log(fields)
//   let form = new FormData()

//   for (let i = 0; i < fields.length; i++) {
//     fields[i] !== "id" &&
//       fields[i] !== "created_at" &&
//       fields[i] !== "updated_at" &&
//       // console.log(document.getElementById(fields[i] + obj.id).value) &&
//       // console.log(fields[i]) &&
//       form.append(fields[i], document.getElementById(fields[i] + obj.id).value)
//   }
//   let chkboxs = document.querySelectorAll(".chkbox")

//   let files = document.querySelector("#" + type + "Img" + obj.id)
//   if (files && files.files.length !== 0) {
//     form.append("picture", files.files[0])
//   }

//   if (type === "projects") {
//     relType = "technology_ids[]"
//   } else {
//     relType = "project_ids[]"
//   }

//   if (chkboxs) {
//     chkboxs.forEach(cb => {
//       if (cb.checked) {
//         // console.log(cb.value)
//         form.append(relType, cb.value)
//       }
//     })
//   }

//   let update = await fetch(BASE_URL + "/" + type + "/" + obj.id, {
//     method: "put",
//     body: form
//   })
//     .then(res => {
//       // console.log(res.json())
//       return res.json()
//     })
//     .then(ans => {
//       // console.log(ans)
//       return ans
//     })
//     .then(async data => {
//       let res = await getResults(type)
//       // console.log(Object.keys(res)[0], res)
//       mapData(res)
//       return data
//     })
// }

// export const getOneProject = async (evt, obj, type) => {
//   // console.log(evt)
//   evt.preventDefault()
//   // console.log('getOneProj-->type', type)
//   let resDiv = document.querySelector("." + type)

//   resDiv.style.display = "none"

//   // console.log(resDiv)
//   // console.log(obj.id)

//   const getProject = await fetch(`${BASE_URL}/${type}/${obj.id}`)
//     .then(function(res) {
//       // console.log(type)
//       // console.log(res.json)
//       return res.json()
//     })
//     .then(function(red) {
//       // console.log(red)
//       return red
//     })
//   // console.log('shoonga')
//   // if (type === 'projects') {
//   //     type = 'project'
//   // } type
//   // if (type === 'technologies') {
//   //     type = 'technology'
//   // }
//   // if (type === 'traits') {

//   //     type = 'trait'

//   // }
//   type = singularize(type)

//   // console.log('type', type, getProject)

//   let allData = getProject
//   allData[type] = [allData[type]]
//   let data = { [type]: [allData[type]] }
//   let relData = { [Object.keys(allData)[1]]: allData[Object.keys(allData)[1]] }
//   //    console.log('allData', allData, 'data', data, 'reldata', relData)
//   mapData(allData)
//   mapRelPrjs(relData)
// }

// let mapRelPrjs = async data => {
//   // console.log('mapRelProj---> data', data)
//   let field
//   let type = Object.keys(data)[0]
//   let allItems = await getResults(type)
//   data = Object.values(data)[0]
//   switch (type) {
//     case "technologies":
//       field = "name"
//       break

//     case "projects":
//       field = "title"
//       break
//   }

//   let checked = ""
//   // console.log(Object.keys(projs.projects[0])[0])
//   Object.values(allItems)[0].map(obj => {
//     // console.log('objid', obj.id, obj.name)
//     let match = data.map(e => {
//       return e.id === obj.id ? "checked" : ""
//       // console.log('match', checked, e.id, obj.id)
//     })
//     // console.log('checked', match)

//     let chkBox = makeElement(
//       "input",
//       "chkbox",
//       document.querySelector(".current form"),
//       {
//         type: "checkbox",
//         name: "projects",
//         value: obj.id,
//         checked: match.includes("checked") ? "checked" : ""
//       }
//     )
//     let text = document.createTextNode(obj[field])
//     document.querySelector(".current form").append(text)
//     chkBox.addEventListener("click", e => {
//       // console.log('clicked', e.target.value)
//     })
//   })
// }

// export const showSingleItemm = async (event, obj, type) => {
//   // event.preventDefault()
//   // console.log('inside function', obj.id)
//   Object.keys(obj)[0]
//   const result = await fetch(`${BASE_URL}/${type}/${obj.id}`)
//     .then(function(res) {
//       // console.log(res.json)
//       return res.json()
//     })
//     .then(function(red) {
//       // console.log(red)
//       return red
//     })
//   return result
//   // let typ = type === 'projects' ? 'project' : 'technology'
//   // console.log(typ)
//   // let x = getProject[typ]
//   // typ ==='technology' && (x.projs = getProject.technology_projects)

//   // console.log(typ,x)

//   // mapData(typ, {[typ]:[x]})
//   // renderOneProject(type, getProject)
// }
