import { cl, cecl, ca, qs, ac } from "../Helpers/domHelper"
import { Burger } from "../Shared/Burger.js"
import { MailTo } from "../Shared/MailTo.js"
import { Router } from "../../Router/Router.js"

import { Footer } from "../Footer/Footer.js"
import { Form, Input, Button, Checkbox, Label } from "../Shared/Form.js"

import "./mainContent.scss"

export const MainContent = () => {
  const mainContent = cecl("div", "main-content")
  mainContent.appendChild(Burger())
  mainContent.appendChild(MailTo())

  const mainContentScrollable = mainContent.appendChild(cecl("div", "main-content-scrollable"))

  const title = mainContent.appendChild(cecl('h3', 'title'))
  title.innerText = 'Mick Roth - Software Engineer'

  const scrollableContent = mainContentScrollable.appendChild(cecl('div', 'scrollable-content'))



  const gohere = (e) => {

console.log(mainContentScrollable.scrollTop)

    if (mainContentScrollable.scrollTop < 50) {
      console.log('zero')
      scrollableContent.scrollIntoView({ block: 'end', behavior: 'smooth' })
    } else {
      console.log('plus')
      scrollableContent.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }

  let className = "see-more-btn"
  const seeMoreBtn = Button(className, "submit", "see more")
  seeMoreBtn.innerHTML = '<i class="fas fa-arrow-circle-down"></i>'

  ac(mainContent, seeMoreBtn)

  seeMoreBtn.onclick = (e) => {
    gohere(e)
  }

  return mainContent
}
