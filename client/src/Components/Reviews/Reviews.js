
import { cecl, qs } from '../Helpers/domHelper'
import { Footer } from '../Footer/Footer.js'
import './Reviews.scss'


export async function Reviews() {


    const mainContentScrollable = await qs(".main-content-scrollable");
    console.log(mainContentScrollable)
    while (mainContentScrollable.childNodes.length) {
        mainContentScrollable.removeChild(mainContentScrollable.lastChild)
    }

    const width = mainContentScrollable.clientWidth
   

    const reviews = cecl('div', 'reviews')
    reviews.innerHTML =
    `<div><h3>Student Feedback</h3>
    <p>I have been working as both a Teaching Assistant and an Instructional Associalte for the Software Engineering Immersive program at General Assembly in New York for almost 2 years. The following spreadsheet shows student feedback for the last three cohorts. Please use the tabs on the bottom for respective cohorts: 'Dragonflies', 'Neptune', and 'Mandalorians'.</p>
    </div>`


    const link = cecl('a', 'link')
    link.href = `https://docs.google.com/spreadsheets/d/1SIv76YOLPMb44BNggmPQGBRfsRWYXxvS2bdW-UjxtZc/edit#gid=1449145157`
    link.innerHTML = 'link to orginal document'
    link.target = '_blank'
    const docWrapper = cecl('div', 'doc-wrapper')
    const doc = cecl('iframe', 'slides')
    doc.src = `https://docs.google.com/spreadsheets/d/e/2PACX-1vTWFrqqrBBnQJsGQEhF4-0PCrV-nt8O8h2U2PpgGZuQTJ2UbnmcUYiHNV_5mgzJv6g_AdYqfkVtmhV8/pubhtml?widget=true&amp;headers=false`
    doc.widget = 'true'
    doc.headers = 'false'
    docWrapper.appendChild(doc)
  

    

    mainContentScrollable.appendChild(reviews)
    mainContentScrollable.appendChild(link)

    mainContentScrollable.appendChild(docWrapper)
    // mainContentScrollable.appendChild(linkList2)
    mainContentScrollable.appendChild(Footer())

}