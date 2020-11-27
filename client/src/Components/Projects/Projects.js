// import "../Shared/Image"
import { qs, qsa, cecl, ac, btn } from "../Helpers/domHelper"
import { verify } from "../Services/ApiAuth.js"
import { getTechnologies } from "../Services/ApiTech.js"
import { Image } from "../Shared/Image.js"
import { Footer } from "../Footer/Footer.js"


import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
  updateProjectTechnologies,
} from "../Services/ApiProject.js"
import { Form, Input, Button, Checkbox, Label } from "../Shared/Form.js"
import { EditProject } from "./EditProject"
import "./projects.scss"

/**********
 CLEAR PAGE
***********/
const clearPage = (element) => {
  while (element.childNodes.length) {
    element.removeChild(element.lastChild)
  }
}

export async function Projects() {

  const mainContent = qs('.scrollable-content')
  // console.log('contenta', contenta)
  // let mainContent = qs(".main-content-scrollable")
  clearPage(mainContent)
  let loading = mainContent.appendChild(cecl("div", "loading"))
  loading.innerHTML = "loading..."


  /**************
  RENDER PROJECTS
  ***************/
  const resp = await getProjects()
  clearPage(mainContent)


  const containerWidth = mainContent.clientWidth
  // const scrollableContent = cecl('div', 'scrollable-content')
  // mainContent.appendChild(scrollableContent)

  resp.forEach(async (project, index) => {

    

    const projectWrap = mainContent.appendChild(cecl("div", "project-wrap"))
    const image = projectWrap.appendChild(
      Image(`src/img/${project.img_url}`, project.name, true, project.site_url, project.build_date)
    )
    console.log(image)
    let bool = "false"
    let linkModal = cecl("div", "link-modal")

    let imgWrapper = qsa(".img-wrapper")
    let innerImgWrap = qsa(".inner-img-wrap")
    let techIcons = cecl("div", "tech-icons")
    project.technologies.forEach((icon) => {
      let techIcon = techIcons.appendChild(cecl("img", "tech-icon"))
      techIcon.src = `src/img/${icon.icon_url}`
    })
    let description = cecl('div', 'description')
    description.innerHTML = project.description

    if (containerWidth < 900) {
      linkModal.appendChild(techIcons)

      linkModal.appendChild(description)

    } else {

      linkModal.appendChild(description)
      linkModal.appendChild(techIcons)

    }



    let linkModalIcons = linkModal.appendChild(cecl('div', 'link-modal-icons'))


    linkModalIcons.innerHTML =
      `<div><a href=${project.site_url} target='_blank'><i class="fas fa-home fa-fw"></i></a>
    <p class='home-tool-tip'>website</p></div>

    <div><a href=${project.github_url} target='_blank'><i class="fab fa-github"></i></a>
    <p class='github-tool-tip'>github</p></div>`


    console.log(innerImgWrap[0].children[1])






    /**************
    ADD LINK MODAL
    ***************/
    imgWrapper[index].addEventListener("click", async () => {
      if (bool === "true") {
        bool = "false"
        innerImgWrap[index].classList.add("close-curtain")
        innerImgWrap[index].classList.remove("open-curtain")
        imgWrapper[index].lastChild.remove()


        imgWrapper[index].style.width = '80%'
        imgWrapper[index].style.padding = '6%'
        imgWrapper[index].style.margin = '0'

        projectWrap.style.margin = '0 10% 3% 10%'
        innerImgWrap[index].style.width = '100%'

        projectWrap.classList.remove("project-wrap-click")

        image.lastChild.remove()

        // innerImgWrap[index].style.height = '100%'

      } else if (bool === "false") {
        console.log(bool)
        bool = "true"
        innerImgWrap[index].classList.add("open-curtain")
        innerImgWrap[index].classList.remove("close-curtain")
        imgWrapper[index].appendChild(linkModal)


        if (containerWidth < 900) {
          imgWrapper[index].style.flexDirection = 'column'
          linkModal.style.width = '90%'
          techIcons.style.width = '80%'
          linkModal.style.marginTop = '5%'
          linkModal.style.background = 'rgb(240, 253, 253)'
        } else {

          imgWrapper[index].style.width = '90%'
          imgWrapper[index].style.padding = '2%'
          imgWrapper[index].style.margin = '0 auto'
          projectWrap.style.margin = '0 1%'

          innerImgWrap[index].style.width = '99%'
          innerImgWrap[index].style.height = '99%'
          // 
        }


        if (containerWidth < 900) {
          console.log('900-')
          image.appendChild(techIcons)
        }
        else {
          console.log('900+')
          innerImgWrap[index].appendChild(techIcons)

        }



        console.log(image)

        let iw = imgWrapper[index].style
        iw.setProperty(
          "--animation",
          "animate-img-wrapper 1.5s linear forwards"
        )
        projectWrap.classList.add("project-wrap-click")

      }
    })

    /*******************
     EDIT PROJECT BUTTON
    ********************/
    if (await verify()) {
      const editProjectWrapper = cecl("div", "edit-project-wrapper")
      const editButton = Button("show-edit-button", "submit", "update")
      editButton.addEventListener("click", () => {
        console.log(projectWrap.lastChild.className)
        if (
          projectWrap.lastChild.className !== "edit-project-form"
        )
          EditProject(projectWrap, project)
        else {
          projectWrap.lastChild.remove()
        }
      })
      editProjectWrapper.appendChild(editButton)

      /************************
       DELETE PROJECT BUTTON
      ************************/
      const deleteButton = Button("delete-project", "submit", "delete")
      deleteButton.addEventListener("click", async () => {
        let answer = confirm(`Are you sure you want to delete ${project.name}?`)
        answer && await deleteProject(project.id)
        answer && await Projects()
      })
      editProjectWrapper.appendChild(deleteButton)

      projectWrap.appendChild(editProjectWrapper)
    }
  })

  /***********
  ADD PROJECT 
  ************/
  if (await verify()) {
    console.log('not fair')
    let addBtn = Button("show-add-form", "submit", "add project")
    addBtn.addEventListener("click", () => {
      console.log(mainContent.lastChild.previousSibling.className)
      if (mainContent.lastChild.previousSibling.className === "show-add-form")
        EditProject(mainContent, resp[0], "addProject")
      else {
        mainContent.lastChild.remove()
      }
    })

    ac(mainContent, addBtn)
  }

  // //down button

  // const seeMoreBtn = Button('see-more-btn', 'submit', 'see more')

  // ac(mainContent, seeMoreBtn)

  mainContent.appendChild(Footer())


}
