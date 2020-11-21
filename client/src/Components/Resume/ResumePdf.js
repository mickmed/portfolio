import "../Shared/Image"
import { qs, cecl } from "../Helpers/domHelper"
import { Footer } from "../Footer/Footer.js"

import './ResumePdf.scss'

import PdfFile from '../../../src/img/mickrothresume.pdf'


import "./resume.scss"

export async function Resume() {
  console.log('pdf')
  let mainContentScrollable = qs(".main-content-scrollable")
  while (mainContentScrollable.childNodes.length) {
    mainContentScrollable.removeChild(mainContentScrollable.lastChild)
  }


  const resumePdf = `
  <embed class='resume-pdf' src=${PdfFile} type='application/pdf'/>



`
  const img = cecl('img', 'img')
  img.src = 'src/img/mam_logo.png'


  mainContentScrollable.innerHTML = resumePdf

  mainContentScrollable.appendChild(Footer())

}