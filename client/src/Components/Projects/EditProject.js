import { Form, Input, Button, Checkbox, Label } from "../Shared/Form.js"
import { getTechnologies } from "../Services/ApiTech.js"
import {
  getProject,
  addProject as addNewProject,
  updateProject,
  deleteProject,
  updateProjectTechnologies,
} from "../Services/ApiProject.js"
import { Projects } from "./Projects.js"
import { ac, cecl } from "../Helpers/domHelper.js"

export const EditProject = async (projectWrap, project, addProject) => {
  /************************
  MAKE AND SET FORM  INPUTS
  *************************/
  console.log("add", addProject)
  if (addProject === "addProject") {
    for (let item in project) {
      project[item] = ""
    }
  }
  let newProject = {}

  let handleChange = (e) => {
    newProject[e.target.name] = e.target.value
  }

  let form = Form("edit-project-form")
  let inputs = cecl('div', 'edit-form-inputs')
  form.appendChild(inputs)
  Object.keys(project).forEach((key) => {
    if (
      key !== "id" &&
      key !== "technologies" &&
      key !== "created_at" &&
      key !== "updated_at"
    ) {
      newProject[key] = project[key]
      const input = Input({
        className: "edit-form-input",
        name: key,
        type: "text",
        value: addProject === "addProject" ? "" : newProject[key],
        placeholder: key,
        handleChange: handleChange,
      })
      inputs.appendChild(input)
    }
  })

  /**************
   SET CHECKBOXES
  ***************/
  const checks = cecl('div', 'edit-form-checkboxes')
  form.appendChild(checks)
  let technologies = await getTechnologies()
  technologies.map((technology) => {

    let checked
    addProject === undefined &&
      project.technologies.forEach((projectTechnology) => {
        if (technology.name === projectTechnology.name) {
          console.log(technology.name, projectTechnology.name)
          checked = "checked"
        }
      })
    let bx = Checkbox({
      className: "edit-project-chkbox",
      name: technology.name,
      id: technology.name,
      value: technology.id,
      checked: addProject === "addProject" ? "" : checked,

    })
    checks.appendChild(bx)
    checks.appendChild(Label("tech-box-label", technology.name, "tech-box"))

  })
  form.appendChild(
    Button(
      "edit-project-button",
      "submit",
      addProject === "addProject" ? "add new project" : "submit"
    )
  )


  ac(projectWrap, form)


  /**********
   SUBMIT FORM
  ***********/
  form.addEventListener("submit", async (evt) => {
    evt.preventDefault()

    const checkboxes = document.querySelectorAll("input[type=checkbox]:checked")
    newProject.technologies = []
    checkboxes.forEach((box) => {
      newProject.technologies.push(box.value)
    })
    addProject === "addProject"
      ? await addNewProject(newProject)
      : await updateProject(newProject, project.id)

    await Projects()
  })
}
