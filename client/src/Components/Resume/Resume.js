import "../Shared/Image"
import { qs, cecl } from "../Helpers/domHelper"
import { Footer } from "../Footer/Footer.js"
import { BaseUrl } from '../Services/BaseUrl'

import './Resume.scss'


const loc = window.location.origin
const PdfFile = `${loc}/src/img/mickrothresume.pdf`




export async function Resume() {
  console.log('pdf')
  let mainContentScrollable = qs(".main-content-scrollable")
  while (mainContentScrollable.childNodes.length) {
    mainContentScrollable.removeChild(mainContentScrollable.lastChild)
  }
  //   <object class='resume-pdf' data=${PdfFile}  type='application/pdf'>
  //   <embed class='resume-pdf' src='https://docs.google.com/document/d/1F0CtmV9ViPecK5KDHgKS2BZJiSy8QL6LS51BF2IaroI/edit' type='application/pdf'/>

  // </object>




  const resu = `<iframe class='resume-pdf' src=${PdfFile}></iframe>`




  mainContentScrollable.innerHTML = resu

  mainContentScrollable.appendChild(Footer())

}