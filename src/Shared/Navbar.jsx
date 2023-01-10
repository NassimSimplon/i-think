import React from 'react'

const Navbar = () => {
  return (
    <div className='NavBar' key="nav_Bar">
      <div className='logo' key="logo">
        <h1 key="logo_Box">IT</h1>
        <span key="logo_Box_sub_logo">hink</span>
      </div>
      <div key="btn_section">
        <button key="login">Log in</button>
        <h2 key="create_account">Create Account ?</h2>
      </div>
    </div>
  )
}



export default Navbar