import { Container } from "./Components/Container/Container.js"

import "@fortawesome/fontawesome-free/js/fontawesome"
import "@fortawesome/fontawesome-free/js/solid"
import "@fortawesome/fontawesome-free/js/regular"
import "@fortawesome/fontawesome-free/js/brands"
import "./body.scss"

require.context('./img', true)





document.body.appendChild(Container())