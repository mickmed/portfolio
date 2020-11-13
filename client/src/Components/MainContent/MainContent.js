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

  mainContent.appendChild(cecl("div", "main-content-scrollable"))

  let className = "see-more-btn"

  const gohere = (e) => {
    const el = qs(".main-content").children[2]

    if (el.scrollTop <= 10) {
      className = "see-more-btn"
      e.target.parentElement.classList.toggle("see-more-btn-flip")
      let i = 10
      let int = setInterval(() => {
        el.scrollTo(0, i)
        i += 20
        if (i >= 1300) clearInterval(int)
      }, 20)
    } else {
      className = "see-more-btn-flip"
      e.target.parentElement.classList.toggle("see-more-btn-flip")
      let i = 1300
      let int = setInterval(() => {
        el.scrollTo(0, i)
        i -= 30
        if (i < 0) clearInterval(int)
      }, 20)
    }
  }

  const seeMoreBtn = Button(className, "submit", "see more")
  seeMoreBtn.innerHTML = '<i class="fas fa-arrow-circle-down"></i>'

  ac(mainContent, seeMoreBtn)

  seeMoreBtn.onclick = (e) => {
    gohere(e)
  }

  return mainContent
}
