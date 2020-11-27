import "../Shared/Image"
import { qs, cecl } from "../Helpers/domHelper"
import { Footer } from "../Footer/Footer.js"
import { BaseUrl } from '../Services/BaseUrl'

import './Resume.scss'


const loc = window.location.origin
const PdfFile = `${loc}/src/img/mickrothresume.pdf`




export async function Resume() {
  console.log('pdf')
  let mainContentScrollable = qs(".scrollable-content")
  while (mainContentScrollable.childNodes.length) {
    mainContentScrollable.removeChild(mainContentScrollable.lastChild)
  }
  //   <object class='resume-pdf' data=${PdfFile}  type='application/pdf'>
  //   <embed class='resume-pdf' src='https://docs.google.com/document/d/1F0CtmV9ViPecK5KDHgKS2BZJiSy8QL6LS51BF2IaroI/edit' type='application/pdf'/>

  // </object>

  const link = cecl('a', 'link')
  link.href = "https://www.keepandshare.com/doc9/25242/mickrothresume-pdf-25k?da=y"
  link.innerHTML = 'link to original document'
  link.target = '_blank'


  const resumePdf = cecl('iframe', 'resume-pdf')
  resumePdf.src = PdfFile



  mainContentScrollable.appendChild(link)
  mainContentScrollable.appendChild(resumePdf)
  mainContentScrollable.appendChild(Footer())

}