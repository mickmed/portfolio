import { BaseUrl } from "./BaseUrl.js"
const baseUrl = BaseUrl()

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

export const clearHeaders = (headers) => {
  return {
    ...headers,
    Authorization: null,
  }
}

export const signUp = async (body) => {
  console.log(JSON.stringify(body))

  let res = await fetch(baseUrl + "/users", {
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

export const login = async (body) => {
  console.log(body)
  let res = await fetch(baseUrl + "/auth/login", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((json) => {
      return json.json()

    })
    .then((data) => {
      // console.log(data)
      localStorage.setItem("authToken", data.token)


      return data
    })
  console.log(res)
  return res
}

export const verify = async () => {
  const token = localStorage.getItem("authToken")
  // console.log(token)
  if (token) {
    const res = await fetch(baseUrl + "/auth/verify", {
      method: "get",
      headers: setHeaders({
        "Content-Type": "application/json",
      }),
    })
      .then((json) => {
        return json.json()
      })
      .then((data) => {
        return data
      })

    return res
  }

  return false
}

export const getCurrentUser = async () => {
  if (localStorage.getItem("authToken")) {
    // console.log("here", localStorage.getItem("authToken"))
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
