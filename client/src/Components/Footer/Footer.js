import { cecl, ac } from "../Helpers/domHelper"
import "./footer.scss"
export const Footer = () => {
  const links = {
    '/': 'Website: Mick Roth',
    'https://github.com/mickmed': 'Github',
    'https://www.linkedin.com/in/mick-roth/': 'LinkedIn',
    'https://mail.google.com/mail/?view=cm&fs=1&to=mickrothnyc@gmail.com': 'mickrothnyc@gmail.com',

  }
  let footer = cecl("footer", "footer")

  Object.keys(links).forEach((link, idx) => {

    let ahref = cecl('a', 'footer-link')
    ahref.href = link
    ahref.innerText = links[link]
    ahref.target = '_blank'


    ac(footer, ahref)
  })

  return footer
}
