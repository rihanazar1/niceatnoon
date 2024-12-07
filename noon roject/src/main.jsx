import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NAV from './NAV.jsx'
import CONTETNT from './content.jsx' 
import CONTETNT1 from './content1.jsx'
import CONTETNT2 from './content2.jsx'
import CONTETNT3 from './content3.jsx'
import CONTETNT4 from './content4.jsx'
import CONTETNT5 from './content5.jsx'
import FOOTER from './footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NAV/>
    <CONTETNT/>
    <CONTETNT1/>
    <CONTETNT2/>
    <CONTETNT3/>
    <CONTETNT4/>
    <CONTETNT5/>
    <FOOTER/>
  </StrictMode>,
)
