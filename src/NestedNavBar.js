import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom"
import { Button} from "@mantine/core"


function NestedNavBar({close}) {
    
  let navigate = useNavigate()
  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((res)=> {
      if (res.ok) {
        navigate("/");
      }
    })

  }

  return (
    <div className="shelf-container">
     <header className="header">
     <div className="close-movie-form" onClick={() => close()}> X </div>
     </header>
     <div className="shelf">
     <NavLink to="/home">
        <Button className='nav-button'>
           Home
         </Button>
       </NavLink>
       <NavLink to="/reviews" >
        <Button className='nav-button'> 
          Reviews
        </Button>
       </NavLink>
               <Button className='nav-button' onClick={handleLogOut} >
                 Log Out
                 </Button>
     </div>            
    
    </div>
  )
}
export default NestedNavBar