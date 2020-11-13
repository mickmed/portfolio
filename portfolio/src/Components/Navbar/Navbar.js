import { cecl, makeElement, qs } from "../Helpers/domHelper"
import RouterModules from "../../Router/RouterModules.js"

import "./navbar.scss"

export function Navbar(parentDiv, data, type = "about") {
  const array = [
    { about: "fa-address-card" },
    { projects: "fa-project-diagram" },
    { resume: "fa-address-card" },
  ]

  //**** ROUTER ****//
  let Navigo = require("navigo")
  let root = null
  let useHash = false // Defaults to: false
  let router = new Navigo(root)
  router
    .on({
      "/signup": function () {
        RouterModules.modules.SignUp().then((module) => module.SignUp())
      },
      'projects': function () {
        // console.log("project route")
        RouterModules.modules.Projects().then((module) => module.Projects())
      },
      'projects/edit/:id': function (params) {
        // console.log("project route")
        RouterModules.modules.MakeForm().then((module) => module.MakeForm(params.id))
      },
      
      about: function () {
        // console.log("about route")
        RouterModules.modules.About().then((module) => module.About())
      },
      resume: function () {
        // console.log("resume route")
        RouterModules.modules.Resume().then((module) => module.Resume())
      },
      "*": function () {
        // console.log("root route")
        RouterModules.modules.About().then((module) => module.About())
      },
    })
    .resolve()

  router
    .notFound(function () {
      // pageNotFoundController()
      router.navigate(route)
      console.log("here not found")
    })
    .resolve()
  // document.body.appendChild(Container())

  //**** NAVBAR ****//

  let render = () => {
    let nav = cecl("div", "navbar")

    array.forEach((opt, i) => {
      let div = cecl("div", "option")
      nav.appendChild(div)

      let text = cecl("div", "text")
      let a = cecl("a", "link")

      a.innerText = Object.keys(array[i])
      // a.setAttribute("href", '#')

      div.appendChild(a)
      

      a.addEventListener("click", (e) => {
        e.preventDefault()

        for (let i = 0; i < nav.children.length; i++) {
 

          nav.children[i].firstChild.style.color = "white"
          nav.children[i].firstChild.style.fontWeight = "400"
          nav.children[i].firstChild.style.cursor = "pointer"

        }
        e.target.style.color = "#ffb566"
        e.target.style.textShadow = '1px 1px black'
        e.target.style.fontWeight = "600"

        router.navigate(Object.keys(array[i])[0])
      })
    })

    return nav
  }

  return render()
}
