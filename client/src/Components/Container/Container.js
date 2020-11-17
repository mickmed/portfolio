import { Sidebar } from '../Sidebar/Sidebar.js'
import { Footer }from '../Footer/Footer.js'
import { MainContent } from '../MainContent/MainContent.js'
import { cl, cecl, ce, ca, ac, qs } from '../Helpers/domHelper'
import { Router } from '../../Router/Router.js'
import { verify } from '../Services/ApiAuth.js'
import "./container.scss"
// import '../../img/canvas.png'

export const Container = () => {
  const container = cecl('div', 'container')
  container.appendChild(Sidebar())
  const mainContent = container.appendChild(MainContent())

  // mainContent.appendChild(Footer()) 
  
  return container
}
