import React from 'react'
import './Navbar.css'
import logo from '../../assets/Youtube-logo.jpg'
import menu from '../../assets/menu-icon.png'
import hamburger from '../../assets/hamburger-icon.png'
import upload from '../../assets/add-video-icon.png'
import search from '../../assets/search-icon.png'
import notice from '../../assets/notice-icon.png'
import user1 from '../../assets/nazzy.jpg'
import { Link } from 'react-router-dom'


const Navbar = ({setSidebar, user}) => {



 
  return (
<>
  
    <nav className='flex-div'>
        <div className="nav-left flex-div">
<img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false? true : false)} src={hamburger} alt="" />

<Link to='/'><img className='logo' src={logo} alt="" /></Link>
        </div>

<div className="nav-middle flex-div">
    <div className="search-box">
    <input type="text"  placeholder='Search'/>
    <div className="search">
    <img  src={search} alt="" />
    </div>
    
    </div>

</div>


<div className="nav-right flex-div">
   {user ? (
 <><img src={upload} alt="" />
 <img src={notice} alt="" />
 <img src={menu} alt="" />
 <img src={user.picture} alt="" className='user-logo' />
 <span>{user.name}</span></>
) : (
  <Link to="/login"></Link>
)}
   
</div>
    </nav>
    </>
  )
}

export default Navbar