import { cl, cecl, ca, qs } from "../Helpers/domHelper"
import { Header } from "../Header/Header.js"
import { Navbar } from "../Navbar/Navbar.js"
import "./sidebar.scss"

export const Sidebar = () => {
  const sidebar = cecl("div", "sidebar")
  sidebar.appendChild(Header())
  sidebar.appendChild(Navbar())
  return sidebar
}
