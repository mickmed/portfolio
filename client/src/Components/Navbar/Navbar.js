import { cecl, makeElement, qs } from "../Helpers/domHelper"
import RouterModules from "../../Router/RouterModules.js"

import "./navbar.scss"
// import { About } from "../About/About"
// import { Projects } from "../Projects/Projects"
// import { }

export function Navbar(parentDiv, data, type = "about") {
  const array = [
    { about: "fa-address-card" },
    { projects: "fa-project-diagram" },
    { contact: "fa-address-card" },
    { resume: "fa-address-card" },
    { lessons: '"fa-address-card"'}
  ]
  console.log("navbar")
  //**** ROUTER ****//
  // let Navigo = require("navigo")
  // let root = null
  // let useHash = false // Defaults to: false
  // let router = new Navigo(root)
  // router
  //   .on({
  //     "/signup": function () {
  //       RouterModules.modules.SignUp().then((module) => module.SignUp())
  //     },
  //     projects: function () {
  //       // console.log("project route")
  //       RouterModules.modules.Projects().then((module) => module.Projects())
  //     },
  //     "projects/edit/:id": function (params) {
  //       // console.log("project route")
  //       RouterModules.modules
  //         .MakeForm()
  //         .then((module) => module.MakeForm(params.id))
  //     },

  //     about: function () {
  //       // console.log("about route")
  //       RouterModules.modules.About().then((module) => module.About())
  //     },
  //     resume: function () {
  //       // console.log("resume route")
  //       RouterModules.modules.Resume().then((module) => module.Resume())
  //     },
  //     "*": function () {
  //       // console.log("root route")
  //       RouterModules.modules.About().then((module) => module.About())
  //     },
  //   })
  //   .resolve()

  // router
  //   .notFound(function () {
  //     // pageNotFoundController()
  //     router.navigate(route)
  //     console.log("here not found")
  //   })
  //   .resolve()
  // document.body.appendChild(Container())

  //**** NAVBAR ****//

  let render = () => {
    const url = window.location.pathname
    const route = url.substr(1, url.length - 1) //url end
    let modName = route.charAt(0).toUpperCase() + route.slice(1) //capitalize

    

    if (route !== "") {
      console.log(route, modName)
      console.log(RouterModules.modules[modName]())
      RouterModules.modules[modName]().then((module) => module[modName]())
    }

    window.onpopstate = () => {

      const url = window.location.pathname
      const route = url.substr(1, url.length - 1) //url end
      let modName = route.charAt(0).toUpperCase() + route.slice(1) //capitalize
      console.log(modName)
      RouterModules.modules[modName]().then((module) => module[modName]())
    }
    let nav = cecl("div", "navbar")

    array.forEach((opt, i) => {
      let div = cecl("div", "option")
      nav.appendChild(div)

      let text = cecl("div", "text")
      let a = cecl("a", "link")

      a.innerText = Object.keys(array[i])
      if (route === "" && a.innerText === "about") {
        a.style.color = "#ffb566"
      }
      if (route === "") {
        console.log("route")
        RouterModules.modules["About"]().then((module) => module["About"]())
      }

      if (Object.keys(array[i])[0] === route) {
        console.log(Object.keys(array[i], route))
        a.style.color = "#ffb566"
      }

      div.appendChild(a)

      a.addEventListener("click", async (e) => {
        e.preventDefault()

        for (let i = 0; i < nav.children.length; i++) {
          nav.children[i].firstChild.style.color = "white"
          nav.children[i].firstChild.style.fontWeight = "400"
          nav.children[i].firstChild.style.cursor = "pointer"
        }
        e.target.style.color = "#ffb566"
        e.target.style.textShadow = "1px 1px black"
        e.target.style.fontWeight = "600"

        // await router.navigate(Object.keys(array[i])[0])

        // callRouter(Object.keys(array[i])[0])

        window.history.pushState(
          {},
          "/" + Object.keys(array[i])[0],
          window.location.origin + "/" + Object.keys(array[i])[0]
        )

        let name = Object.keys(array[i])[0]
        let modName = name.charAt(0).toUpperCase() + name.slice(1) //capitalize first letter in route
        console.log(window.location.pathname, modName, RouterModules.modules)

        RouterModules.modules[modName]().then((module) => module[modName]())
      })
    })

    return nav
  }

  return render()
}
