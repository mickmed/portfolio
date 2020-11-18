import {
 
  signUp,
  login,
  verify,
  logout,
} from "../Services/ApiAuth.js"
import { cecl, qs } from "../Helpers/domHelper.js"
import "./signup.scss"




export const Signup = async () => {
  console.log('here')

  // const body = {
  //   user: { username: "ted", email: "ted@ted.com", password: "123456" },
  // }
  console.log("EDIT PROJECTS")
  let mainContent = qs(".main-content-scrollable")
  while (mainContent.childNodes.length > 1) {
    mainContent.removeChild(mainContent.lastChild)
  }

  const inputs = ["username", "email", "password"]
  // const body = {username:'', email:'', password:''}
  let body = { user: {} }

  let signUpDiv = cecl("div", "sign-up")
  let form = cecl("form", "login-form")

  inputs.map((el) => {
    let label = form.appendChild(cecl(`label`, `login-label`))
    label.setAttribute(`for`, el)
    label.innerText = el
    let input = form.appendChild(cecl("input", `login-${el}`))
    input.setAttribute(`id`, el)
    input.setAttribute(`name`, el)
    input.addEventListener("keyup", (e) => {
      console.log(e.target.name, e.target.value)
      body.user[e.target.name] = e.target.value
    })
  })
  const button = cecl("button", "submit-login")
  button.innerText = "signUp"
  form.appendChild(button)
  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    console.log("body", body)
    let signUpRes = await signUp(body)
    console.log(signUpRes)
  })

  let loginButton = cecl("button", "login")
  loginButton.classList.add('login-btn')

  
  let currentUser = await verify()
  if(currentUser.errors){
    console.log('logout due to error')
    logout()
    let loginButton = cecl("button", "login")


  }
  

  loginButton.innerText = currentUser ? 'logout' : 'login' 
  

  loginButton.addEventListener("click", async () => {
    // let currentUser = await getCurrentUser()
    console.log(currentUser)

    if (!currentUser && Object.keys(body.user).length !== 0) {
      body = { auth: { ...body.user } }
     
      let user = await login(body)
      let currentUser = await verify()
      loginButton.innerText = currentUser && 'logout'
    } else {
      let resLogout = await logout()

      if (resLogout) {
        loginButton.innerText = "login"
        
      }
    }
  })

  signUpDiv.appendChild(form)
  signUpDiv.appendChild(loginButton)
  mainContent.appendChild(signUpDiv)

  
}
