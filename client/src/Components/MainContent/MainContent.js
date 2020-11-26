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

  const title = mainContent.appendChild(cecl('h3', 'title'))
  title.innerText = 'Mick Roth - Software Engineer'

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

    if(el.scrollTop <1 ){
      className = "see-more-btn"
      // e.target.parentElement.classList.toggle("see-more-btn-flip")
      let j = el.scrollTop
      let intDown = setInterval(() => {
        j += 10
        el.scrollTo({top:j, behavior:'smooth'})


      
        console.log(el.scrollHeight, el.scrollTop, el.clientHeight, j)
        if (el.scrollHeight - el.scrollTop === el.clientHeight) {
          clearInterval(intDown)
        }
      }, 10)
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
