import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import './Layout.css'

const Header = () => {
  return (
    <>
    <div className="Header1">
    <div className="Connect"><FaWhatsapp />+977-9818875015 </div>
    <div className='Connect'><MdMarkEmailUnread />nairainternational.edu@gmail.com</div>
    </div>
    </>

  )
}

export default Header