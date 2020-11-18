import { cecl } from "../Helpers/domHelper.js"

export const MailTo = () => {
  let button = cecl("button", "mail-to")
  button.innerHTML = '<i class="fa fa-envelope" aria-hidden="true" style="background:transparent;font-size:2em;color:lightBlue"></i>'

  button.addEventListener("click", () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=mickrothnyc@gmail.com"
    )

    // "mailto:MICK<mickrothnyc@gmail.com.br>"
  })
  return button
}
