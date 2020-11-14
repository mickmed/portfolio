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

  const el = mainContent.children[2]
  const parent = mainContent
  console.log(mainContent.children)

  el.onscroll = () => {
    // console.log('scrollTop', el.scrollTop)
    // console.log('scrollBottom', el.scrollBottom)
    // console.log('parentscrolltop', el.scrollTop/parent.clientHeight * 100)
  }

  const gohere = (e) => {
    const parent = qs(".main-content")

    const el = parent.children[2]

    if (el.scrollTop > 1) {
      className = "see-more-btn-flip"
      e.target.parentElement.classList.toggle("see-more-btn-flip")
      let i = el.scrollTop
      let int = setInterval(() => {
        el.scrollTo(0, i)

        i -= 1
        if (i === 0) {
          // console.log('more2')
          clearInterval(int)
        }
      }, 1)
    } else {
      console.log("less")
      className = "see-more-btn"
      e.target.parentElement.classList.toggle("see-more-btn-flip")
      let i = 1
      let int = setInterval(() => {
        el.scrollTo(0, i)

        i += 1
        if (el.scrollHeight - el.scrollTop === el.clientHeight) {
          clearInterval(int)
          console.log("less2")
        }
      }, 1)
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
