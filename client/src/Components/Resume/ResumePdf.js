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


  const resumePdf = `<object class='resume-pdf' data=https://drive.google.com/drive/u/0/my-drive  type="application/pdf">
  <embed src=https://drive.google.com/drive/u/0/my-drive type="application/pdf"
  alt: <a href = https://drive.google.com/drive/u/0/my-drive>

</object>`
  const img = cecl('img', 'img')
  img.src = 'src/img/mam_logo.png'


  mainContentScrollable.innerHTML = resumePdf

  mainContentScrollable.appendChild(Footer())

}