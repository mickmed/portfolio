import "../Shared/Image"
import { qs, cecl } from "../Helpers/domHelper"
import { Footer } from "../Footer/Footer.js"


import "./resume.scss"



// import { showSingleItemm } from "./api_helper";
// import { technologies } from "./technologies";
// import { navbar } from "./nav";

export async function Resume () {
  // console.log("RESUME")

  // window.matchMedia("(min-width: 600px)").matches &&
  // document.querySelector('.sidebar').style.display === "none"
  // &&  (document.querySelector('.sidebar').style.display = "inline")


  const array = [
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
    { type: "pdf", icon: '<i class="far fa-file-pdf"></i>', url: "https://www.docdroid.net/zQfqmfj/mick-roth-resume-pdf" },
    { type: "ga", icon: `<img src="https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png"/>` , url: "https://generalassemb.ly/instructors/mick-roth/23105" },
    { type: "resumePdf", icon: '<i class="far fa-file-pdf"></i>', url: "/resumepdf" },

  ]


  // console.log('resume')
  let mainContentScrollable = qs(".main-content-scrollable")
  // console.log("res maincont", mainContent.childNodes)
  while (mainContentScrollable.childNodes.length) {
    mainContentScrollable.removeChild(mainContentScrollable.lastChild)
  }
  // console.log("res maincont", mainContent.childNodes)

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

  //   if (type === ".PDF") {
  // console.log(navigator.userAgent)

  //     let pdfObject = imgWrapper.appendChild(cecl('object', 'object'))
  //     pdfObject.data = "./src/img/resume.pdf"
  //     pdfObject.frameborder = 0
  //     // pdfObject.srolling = 'no'
  //     pdfObject.navpanes = 0
  //     // pdfObject.scrollbar = 0
  //     pdfObject.height = '100%'
  //     pdfObject.width = '100%'
  //     pdfObject.innerText = "It appears your browser does not support .PDFs, but you can download it below"

  //     if (pdfObject.innerText.length !== 0) {
  //       let download = imgWrapper.appendChild(cecl('div', 'div'))
  //       download.innerHTML = '<span><i class="fas fa-arrow-down"></i></span>'
  //       console.log(download)
  //       download.addEventListener("click", (e) => {
  //         e.preventDefault()
  //         console.log('here')
  //         window.open("./src/img/resume.pdf", "_blank")
  //       })
  //     }
  //   }

  // if (type === ".DOC") {
  //   let iframeGoogle =
  //     type === ".DOC" &&
  //     makeElement("iframe", "iframe", imgWrapper, {
  //       src:
  //         "https://docs.google.com/document/d/1K55Ni0Ck3mvfUIwPlBHoXo_ZcNFA4ubPwpZ_fujHgWU/export?format=doc",
  //       style: "width:100%; height: 100%;border: none;",
  //     })

  //   // let doc = makeElement('iframe', 'iframe', imgWrapper, { src: 'https://docs.google.com/a/[DOMINIO]/viewer?url=./src/img/resume.docx', style: "position: absolute;width:100%; height: 100%;border: none;" })
  // }

  // let pdfObjectEmbed = type === '.PDF' && makeElement('object', 'object', imgWrapper,
  //     {
  //         data: './src/img/resume.pdf#toolbar=0&navpanes=0',
  //         width: '100%', height: '100%',

  //     })
  // let p = makeElement('p', 'p', pdfObject)

  // let embed = makeElement('embed', 'embed', pdfObject,
  //     {
  //         type: "application/pdf",
  //         src: './src/img/resume.pdf#toolbar=0&navpanes=0',
  //     })

  // let pdfIframe = type === '.PDF' && makeElement('iframe', 'iframe', imgWrapper,
  // {
  //     src: './src/img/resume.pdf',
  //     width: '100%', height: '100%',
  //     innerText: 'It appears your browser does not support .PDFs, but you can download it below',
  //     frameborder: 0,
  //     scrolling: 'no',
  //     navpanes: 0,
  //     scrollbar: 0

  // })

  // let pdfEmbed = type === '.PDF' && makeElement('embed', 'embed', imgWrapper,
  //     {
  //         src: './src/img/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&frameborder=0',
  //         width: '100%', height: '100%',
  //         frameborder:0,
  //         scrolling:'no',
  //         navpanes:0,
  //         scrollbar:0
  //     })

  // <object data="mydocument.pdf">
  //     <p><a href="mydocument.pdf">Download</a></p>
  //     <embed type="application/pdf" src="mydocument.pdf" />
  // </object>

  //    <img src = "http://pngimg.com/uploads/paper_sheet/paper_sheet_PNG7252.png"/ width="50px" height="70px">

  // console.log(img)
  // let gDoc = type === 'GoogleDoc' && makeElement('embed', 'iframe', imgWrapper, { src: 'https://docs.google.com/document/d/1K55Ni0Ck3mvfUIwPlBHoXo_ZcNFA4ubPwpZ_fujHgWU/edit?usp=sharing&single=true&widget=false&headers=false&chrome=false', width: '100%', height: '800%', frameborder: '0' })

  // src='https://view.officeapps.live.com/op/embed.aspx?src=[OFFICE_FILE_URL]' width='px' height='px' frameborder='0'
  // < iframe src = "http://docs.google.com/viewer?url=<?=urlencode($url)?>&embedded=true"  style = "position: absolute;width:100%; height: 100%;border: none;" ></iframe>
}
