import React, {useState }from 'react'

import NestedNavBar from './NestedNavBar'


function NavBar() {
    
    const [formOpen, setFormOpen] = useState(false)
    
    function selectedForm(){
        setFormOpen(true)
      }

      function close(){

        setFormOpen(false);
      }
  return (
    <>
    <div className='movie-form-button' onClick={selectedForm}>=</div>
    {formOpen && <NestedNavBar close={close}/>}
    </>
  )
}
export default NavBar