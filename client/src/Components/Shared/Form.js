import { ce, createElement, cecl, ac, btn } from "../Helpers/domHelper.js"
// export const Form = (obj, handleChange, formClassName) => {
//   let form = cecl(`form`, formClassName)
//   let formInputs = cecl("div", "inputs")
//   // console.log(formInputs)
//   ac(form, formInputs)
//   let inputs = Object.keys(obj)
//   inputs.map((el) => {
//     let input = cecl(`input`, el)
//     formInputs.append(input)
//     input.name = el
//     input.value = obj ? obj[el] : ""
//     input.placeholder = el
//     input.addEventListener(`keyup`, (e) => {
//       handleChange(e)
//     })
//   })
//   formInputs.appendChild(btn("update project", "submit", "update-btn"))

//   return form
// }

export const Form = (className) => {
  let form = createElement(`form`)
  form.className = className
  return form
}

export const Input = (inputAtts) => {
  console.log(inputAtts)
  const { className, name, type, value, placeholder, handleChange } = inputAtts
  console.log(className)
  let input = createElement(`input`)
  input.className = className
  input.name = name
  input.type = type
  input.value = value
  input.placeholder = placeholder

  input.addEventListener(`keyup`, (e) => {

    handleChange(e)
  })

  return input
}

export const Button = (className, type, innerText) => {
  let btn = cecl("button", className)
  btn.type = type
  btn.innerText = innerText
  return btn
}

export const Checkbox = (inputAtts) => {
  let { className, name, id, value, checked } = inputAtts
  console.log(checked)
  let chkBox = createElement("input")
  className = className
  chkBox.name = name
  chkBox.id = id
  chkBox.value = value
  chkBox.type = "checkbox"

  checked === "checked" && chkBox.setAttribute("checked", "")



  return chkBox
}

export const Label = (className, name, id) => {
  let label = createElement('label')
  label.className = className
  label.for = id
  label.innerHTML = name
  return label
}
