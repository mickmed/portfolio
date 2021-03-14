import { qs, cecl } from "../Helpers/domHelper"
import { Footer } from "../Footer/Footer.js"
import "./about.scss"
export async function About() {
  let text =
    "<a> I am an Instructional Associate for the Software Engineering Immersive program at <span class='ga'>General Assembly's</span> New York campus. I also freelance as a React Developer. I recently had the pleasure of working on the data vizualization components for <span class='onehunmill'>the 100 Million Project</span>, which launched on <span class='cspan'>CSPAN February 2020.</span></a>"
  let text1 =
    "With some self-taught experience, I graduated from the codeBridge program at <span class='perscholas'>Per Scholas</span> in 2018, and in turn General Assembly's Web Development Immersive program in 2019. For the past year I have worked as a Teaching Assistant and an Instructional Associate at General Assembly."
  let text2 =
    "You can see some projects <span class='projects-link'>here</span>. I mostly build full-stack Javascript apps with React, Node, Sequelize, Express, and Postgres. I also enjoy Vanilla Javascript. Other front-end tools are CSS, JQuery, Bootstrap, and Mapbox. This site was built with Vanilla Javascript and comprizes of a Rails backend."
  // console.log("ABOUT")
  let mainContentScrollable = qs(".scrollable-content")
  console.log(mainContentScrollable.childNodes)
  while (mainContentScrollable.childNodes.length) {
    mainContentScrollable.removeChild(mainContentScrollable.lastChild)
  }
  let description = mainContentScrollable.appendChild(cecl("div", "text"))
  description.innerHTML = text
  let ga = qs(".text .ga")
  ga.style.color = "blue"
  ga.style.cursor = "pointer"
  let cspan = qs(".text .cspan")
  cspan.style.color = "blue"
  cspan.style.cursor = "pointer"
  let oneHunMil = qs(".text .onehunmill")
  oneHunMil.style.color = "blue"
  oneHunMil.style.cursor = "pointer"
  cspan.style.cursor = "pointer"
  ga.addEventListener("click", () => {
    window.open('https://generalassemb.ly/instructors/mick-roth/23105')
      target = "_blank"
    
  })
  cspan.addEventListener("click", () => {
    window.open('https://www.c-span.org/video/?469449-1/2020-elections-nonvoters')
    target = "_blank"
  })
  oneHunMil.addEventListener("click", () => {
    window.open('https://the100million.org/')
    target = "_blank"
    
  })
  let aboutImageWrapper = cecl('div', 'about-image-wrapper')
  let image = cecl('img', 'about-image')
  image.src = "src/img/100mill8.png"
  image.decoding = 'sync'
  image.addEventListener("click", (evt) => {
    window.open('https://the100million.org/')
    target = "_blank"
  })
  image.style.cursor = "pointer"

  
  aboutImageWrapper.appendChild(image)
  mainContentScrollable.appendChild(aboutImageWrapper)
  let description1 = mainContentScrollable.appendChild(cecl("div", "text"))
  description1.innerHTML = text1
  let perScholas = qs(".text .perscholas")
  perScholas.style.color = "blue"
  perScholas.style.cursor = "pointer"
  perScholas.addEventListener("click", () => {
  })
  let description2 = mainContentScrollable.appendChild(cecl("div", "text"))
  description2.innerHTML = text2
  let projectsLink = qs(".projects-link")
  projectsLink.style.color = "blue"
  projectsLink.style.cursor = "pointer"
  projectsLink.addEventListener("click", () => {
    window.location.href = "/projects"
  })

  mainContentScrollable.appendChild(Footer()) 
}
