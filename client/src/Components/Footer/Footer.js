import { cecl, ac } from "../Helpers/domHelper"
import "./footer.scss"
export const Footer = () => {
  const links = {
    '/': 'Website: Mick Roth &copy; 2019',
    'https://github.com/mickmed': '<i class="fab fa-github"></i>',
    'https://www.linkedin.com/in/mick-roth/': '<i class="fab fa-linkedin"></i>',
    'https://www.facebook.com/mick.roth.1': '<i class="fab fa-facebook-square"></i>',
    'https://twitter.com/micky_medium': '<i class="fab fa-twitter"></i>',
    'https://mail.google.com/mail/?view=cm&fs=1&to=mickrothnyc@gmail.com': '<i class="fa fa-envelope" aria-hidden="true" style="background:transparent;font-size:1em;color:rgb(189, 75, 75)"></i>',

   


  }
  let footer = cecl("footer", "footer")

  Object.keys(links).forEach((link, idx) => {



    let ahref = cecl('a', 'footer-link')
    ahref.href = link
    ahref.innerHTML = links[link]
    ahref.target = '_blank'


    ac(footer, ahref)



  })

  return footer
}
