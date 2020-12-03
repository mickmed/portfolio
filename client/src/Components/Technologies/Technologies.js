

import { cecl, qs } from '../Helpers/domHelper'

import { getTechnologies, updateTechnology } from '../Services/ApiTech'

import { Form, Input, Button } from '../Shared/Form'

import './Technologies.scss'


export async function Technologies() {

  console.log(getTechnologies)

  const newTech = {}

  let newIconUrl = ''


  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    // newTech[e.target.name] = e.target.value

    newIconUrl = e.target.value

  }
  const mainContentScrollable = qs(".scrollable-content")
  while (mainContentScrollable.childNodes.length) {
    mainContentScrollable.removeChild(mainContentScrollable.lastChild)
  }
  const technologies = mainContentScrollable.appendChild(cecl("div", "technologies"))

  const techIcons = await getTechnologies()

  techIcons.forEach((tech, index) => {
    let icon = cecl('img', 'tech-icon')
    icon.src = `src/img/${tech.icon_url}`
    technologies.appendChild(icon)

    let name = cecl('div', 'name')
    name.innerText = tech.name
    const form = Form()
    const input = Input({ className: 'techIconInput', name: tech.name, type: 'text', value: tech.icon_url, placeholder: 'tech-icon-url', handleChange })
    form.appendChild(input)
    technologies.appendChild(form)
    name.addEventListener('click', (e) => {
      handleChange(e)

    })
    const button = Button('update-tech-icon-btn', 'submit', 'update icon url')
    button.addEventListener('click', () => {
      console.log(tech.id)
      updateTechnology({...tech, icon_url:newIconUrl}, tech.id)
    })
    technologies.appendChild(button)

  })








  return mainContentScrollable
}

