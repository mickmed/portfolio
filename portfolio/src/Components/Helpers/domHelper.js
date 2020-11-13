export const cl = (str) => {
  // return console.log(str)
}
export const cecl = (type, str) => {
  let el = document.createElement(type)
  el.classList.add(str)
  return el
}
export const createElement = (str) => {
    return document.createElement(str)
}

export const ca = (el, str) => {
  return el.classList.add(str)
}

export const qs = (str) => {
  return document.querySelector(str)
}

export const qsa = (str) => {
  return document.querySelectorAll(str)
}

export const btn = (innerText, type, className) => {
  let btn = cecl("button", className)
  btn.innerText = innerText
  btn.type = type
  return btn
}

export const ac = (parent, child) => {
  // console.log('parent', parent, child)
  let x = parent.appendChild(child)
  // console.log('k', x)
  return parent.appendChild(child)
}

// export const ce = (name) => document.createElement(name)
export let ce = (element_type, className, parent, obj = {}) => {
  // console.log(parent)
  let el = document.createElement(element_type)
  let objKeys = Object.keys(obj)
  objKeys.forEach((ok) => {
    if (ok !== "") {
      el[ok] = obj[ok]
    }
  })
  // console.log(parent, el)
  el.classList.add(className)
  parent.appendChild(el)
  return el
}

export const BurgerClick = (switchBurger) => {
  //   const switchBurger = { showSidebar: true }

  const mainContent = qs(".main-content")
  const sidebar = qs(".sidebar")
  if (switchBurger.showSidebar === true) {
    sidebar.style.display = "block"

    let count = -100
    let slider = setInterval(() => {
      count += 10
      sidebar.style.transform = `translate(${count}%, 0)`

      if (count === 0) {
        clearTimeout(slider)
        switchBurger.showSidebar = false
       
      } else {
       
        mainContent.style.width = `${-1000 / count}%`
      }
    }, 40)
  } else {
    let count = 10
    let slider = setInterval(() => {
      count -= 10
      sidebar.style.transform = `translate(${count}%, 0)`
      
      mainContent.style.width = `${-count}%`
      if (count === -100) {
        
        sidebar.style.display = "none"
        clearTimeout(slider)
        switchBurger.showSidebar = true
      }
    }, 40)
  }
}

