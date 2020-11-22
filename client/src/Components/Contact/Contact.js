import "../Shared/Image"
import { qs, cecl } from "../Helpers/domHelper"
import { Footer } from "../Footer/Footer.js"


import "./contact.scss"



export async function Contact() {



  const array = [
    { type: "resumePdf", icon: '<i class="far fa-file-pdf"></i>', url: "/resume" },

    {
      type: "googleDocs",
      icon: '<i class="fab fa-google-drive"></i>',
      url:
        "https://docs.google.com/document/d/1F0CtmV9ViPecK5KDHgKS2BZJiSy8QL6LS51BF2IaroI/edit",
    },

    {
      type: "linkedin",
      icon: '<i class="fab fa-linkedin"></i>',
      url: "https://www.linkedin.com/in/mick-roth",
    },
    {
      type: "github",
      icon: '<i class="fab fa-github"></i>',
      url: "https://github.com/mickmed",
    },
    // { type: "pdf", icon: '<i class="far fa-file-pdf"></i>', url: "https://www.docdroid.net/zQfqmfj/mick-roth-resume-pdf" },
    { type: "ga", icon: `<img src="https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png"/>`, url: "https://generalassemb.ly/instructors/mick-roth/23105" },
    // { type: 'mewe', icon: '<img src="https://media.cdnandroid.com/item_images/639024/imagen-mewe-0thumb.jpeg" height="80px" width="80px"/>', url: "https://mewe.com/i/mickroth1" }

  ]


  // console.log('resume')
  let mainContentScrollable = qs(".main-content-scrollable")
  while (mainContentScrollable.childNodes.length) {
    mainContentScrollable.removeChild(mainContentScrollable.lastChild)
  }




  let resume = mainContentScrollable.appendChild(cecl("div", "resume"))
  let resImgWrapper = resume.appendChild(cecl("div", "res-img-wrapper"))

  array.forEach((opt, i) => {
    let option = resImgWrapper.appendChild(cecl("div", "option"))
    option.setAttribute("value", opt.type)



    option.innerHTML = `<a href = ${opt.url} target='_blank'>${opt.icon}</a>`

    option.addEventListener("mouseover", (e) => {
      resImgWrapper.childNodes.forEach((res) => {
        res.classList.remove("highlight")
      })
      console.log(resImgWrapper.childNodes[i])
      option.classList.add("highlight")
      // console.log(option)
    })

    option.classList.remove("highlight")
  })
  mainContentScrollable.appendChild(Footer())
}