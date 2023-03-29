import React from 'react'

import { NavLink } from "react-router-dom"
import { Button} from "@mantine/core"


function NestedNavBar({close}) {
    
 

  return (
    <div className="shelf-container">
     <header className="header">
     <div className="close-navbar" onClick={() => close()}> X </div>
     </header>
     <div className="nav-shelf">
     <NavLink to="/home">
        <Button className='nav-button'>
           Home
         </Button>
       </NavLink>
       <NavLink to="/about" >
        <Button className='nav-button'> 
          About
        </Button>
       </NavLink>
              
     </div>            
    
    </div>
  )
}
export default NestedNavBar