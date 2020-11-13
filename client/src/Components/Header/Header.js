import { cecl } from "../Helpers/domHelper"
import "./header.scss"

export const Header = (parentDiv) => {
  let header = cecl("div", "header")

  let namePlate = cecl("a", "name-plate")
  namePlate.innerText = "Mick Roth"
  namePlate.href = "/"




  header.appendChild(namePlate)


  return header
  // ce("a", 'name-plate', header, { innerText: "Mick Roth", href:'index.html' })
  // ce("div", "occupation", header, { innerText: "software engineer" })
}
