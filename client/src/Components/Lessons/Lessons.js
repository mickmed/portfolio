
import { cecl, qs } from '../Helpers/domHelper'
import { Footer } from '../Footer/Footer.js'
import './Lesssons.scss'


export async function Lessons() {


    const mainContentScrollable = await qs(".scrollable-content");
    console.log(mainContentScrollable)
    while (mainContentScrollable.childNodes.length) {
        mainContentScrollable.removeChild(mainContentScrollable.lastChild)
    }

    const width = mainContentScrollable.clientWidth
    console.log(width)
    let frameWidth, frameHeight
    if (width > 600 && width < 900) {
        frameWidth = 480
        frameHeight = 299

    } else if (width > 900 && width < 1200) {
        frameWidth = 960
        frameHeight = 569


    } else if (width > 1200) {
        frameWidth = 1440
        frameHeight = 839
    }

    const linkList = cecl('div', 'linked-lists')
    linkList.innerHTML =
        `<div><h3>Linked Lists</h3>
            <p>Slide 1) The unshift method calls the Node class and adds a new node to the beginning of the linked list. We can see that as each new node is created <i>this.next</i> points to the following node.</p>
        </div>`

    const link = cecl('a', 'link')
    link.href = `https://docs.google.com/presentation/d/e/2PACX-1vTDsnjcpJ49de8trQkESBQbLFeeqywV_VJB_mgb5l1oqsaLTs5Rp8rS-XbDhjFeJDpqrNuZ34GGCabs/embed?start=false&loop=false&delayms=3000`
    link.innerHTML = 'link to orginal document'
    link.target = '_blank'

    const docWrapper = cecl('div', 'doc-wrapper')
    const doc = cecl('iframe', 'slides')
    doc.src = `https://docs.google.com/presentation/d/e/2PACX-1vTDsnjcpJ49de8trQkESBQbLFeeqywV_VJB_mgb5l1oqsaLTs5Rp8rS-XbDhjFeJDpqrNuZ34GGCabs/embed?start=false&loop=false&delayms=3000`
    doc.frameborder = "0"
    doc.allowfullscreen = "true"
    doc.mozallowfullscreen = "true"
    doc.webkitallowfullscreen = "true"
    docWrapper.appendChild(doc)

    const linkList2 = cecl('div', 'linked-lists')
    linkList2.innerHTML =
        `<div>
            <p>Slide 2) The push method calls the node class and adds a new node to the end of the linked list. The <i>this.next</i> property of the previous node points to our new node.</p>
            <p>Slide 3) The insertAt method adds a new node to the specified position in the list. The <i>this.next</i> property of the previous node points to our new node.</p>
            <p>Slide 4) The getAt method retrieves the given node at the given index.</p>
            <p>Slide 5) The deleteAt removes a given node at the given index.</p>
        </div>`

    mainContentScrollable.appendChild(linkList)
    mainContentScrollable.appendChild(link)
    mainContentScrollable.appendChild(docWrapper)
    mainContentScrollable.appendChild(linkList2)
    mainContentScrollable.appendChild(Footer())

}