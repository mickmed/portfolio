import "../Shared/Image"
import { qs, cecl } from "../Helpers/domHelper"
import { Footer } from "../Footer/Footer.js"
import { BaseUrl } from '../Services/BaseUrl'

import './ResumePdf.scss'

const PdfFile = `${window.location.origin}/src/img/mickrothresume.pdf`
console.log(BaseUrl())


import "./resume.scss"

export async function Resume() {
  console.log('pdf')
  let mainContentScrollable = qs(".main-content-scrollable")
  while (mainContentScrollable.childNodes.length) {
    mainContentScrollable.removeChild(mainContentScrollable.lastChild)
  }
//   <object class='resume-pdf' data=${PdfFile}  type='application/pdf'>
//   <embed class='resume-pdf' src='https://docs.google.com/document/d/1F0CtmV9ViPecK5KDHgKS2BZJiSy8QL6LS51BF2IaroI/edit' type='application/pdf'/>

// </object>
const location = window.location.origin

console.log(window.location)

const res = cecl('a', 'resume-pdf')
res.href = location + '/src/img/mickrothresume.pdf'
res.innerText = 'hi te'


console.log(res)

const resu = `<iframe class='resume-pdf' src=${PdfFile}></iframe>`
 
  // const img = cecl('img', 'img')
  // img.src = 'src/img/mam_logo.png'


  mainContentScrollable.innerHTML = resu

  mainContentScrollable.appendChild(Footer())

}