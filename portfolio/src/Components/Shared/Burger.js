import { cecl, BurgerClick } from "../Helpers/domHelper"

export const Burger = () => {
  const switchBurger = { showSidebar:false }

  let burger = cecl("div", "burger")
  for (let i = 0; i < 3; i++) {
    let div = cecl("div", "line")
    burger.appendChild(div)
  }

  burger.addEventListener("click", () => {
    BurgerClick(switchBurger)
  })

  return burger
}
