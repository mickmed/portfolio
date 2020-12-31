import { cecl, qs } from '../Helpers/domHelper'
import { verify } from '../Services/ApiAuth'
import { getTechnologies, createTechnology, updateTechnology, deleteTechnology } from '../Services/ApiTech'
import { Form, Input, Button } from '../Shared/Form'
import './Technologies.scss'

export async function Technologies() {

  const mainContentScrollable = qs(".scrollable-content")
  while (mainContentScrollable.childNodes.length) {
    mainContentScrollable.removeChild(mainContentScrollable.lastChild)
  }

  const user = await verify()
  const technologies = mainContentScrollable.appendChild(cecl("div", "technologies"))
  const techIcons = await getTechnologies()

  let newIconUrl = ''
  let name = ''
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    newIconUrl = e.target.value
  }

  const handleNameChange = (e) => {
    console.log(e.target.name, e.target.value)
    name = e.target.value
  }
  const create = (e, body) => {
    e.preventDefault()

    createTechnology(body)

  }
  const update = (e, body, id) => {
    e.preventDefault()
    updateTechnology(body, id)
  }

  techIcons.forEach((tech, index) => {
    let icon = cecl('img', 'tech-icon')
    icon.src = `src/img/${tech.icon_url}`
    technologies.appendChild(icon)

    if (user && user.isAdmin) {

      let name = cecl('div', 'name')
      name.innerText = tech.name
      const form = Form('tech-icon-form')
      const input = Input({ className: 'techIconInput', name: tech.name, type: 'text', value: tech.icon_url, placeholder: 'tech-icon-url', handleChange })
      form.appendChild(input)
      form.appendChild(name)
      technologies.appendChild(form)

      const button = Button('update-tech-icon-btn', 'submit', 'update icon url')
      form.addEventListener('submit', (e) => {
        console.log(tech.id)
        update(e, { ...tech, icon_url: newIconUrl }, tech.id)
      })
      form.appendChild(button)

      const deleteBtn = Button('delete-tech-btn', 'submit')
      deleteBtn.innerText = 'delete'
      deleteBtn.addEventListener('click', ()=>{
        console.log('test')
        deleteTechnology(tech.id)
      })
      form.appendChild(deleteBtn)
    }


  })

  const deleteTech = () => {

  }






  const form = Form('add-tech-icon-form')
  const nameInput = Input({ className: 'name', name: 'nameInput', type: 'text', value: '', placeholder: 'new technology', handleChange })
  const input = Input({ className: 'techIconInput', name: 'input', type: 'text', value: newIconUrl, placeholder: 'tech-icon-url', handleChange: handleNameChange })


  technologies.appendChild(form)
  const button = Button('new-tech-icon-btn', 'submit', 'new icon url')
  form.addEventListener('submit', async (e) => {
    console.log(newIconUrl)

    const resp = await create(e, { name: name, icon_url: newIconUrl })


  })
  form.appendChild(button)
  form.appendChild(input)
  form.appendChild(nameInput)
  return mainContentScrollable
}

