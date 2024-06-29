import React, { useState } from 'react'
import autoIcon from '../../assets/auto-icon.png'
import blogIcon from '../../assets/blogs-icon.png'
import entertainIcon from '../../assets/entertain-icon.png'
import gameIcon from '../../assets/game-icon.png'
import homeIcon from '../../assets/home-icon.png'
import musicIcon from '../../assets/music-icon.png'
import newsIcon from '../../assets/news-icon.png'
import sportsIcon from '../../assets/sports-icon.png'
import techIcon from '../../assets/tech-icon.png'
import user from '../../assets/nazzy.jpg'
import loginIcon from '../../assets/login-icon.png'
import './SideBar.css'
import { useNavigate } from 'react-router-dom'
import { googleLogout } from '@react-oauth/google'



const SideBar = ({sidebar, category, setCategory, setUser}) => {
const navigate = useNavigate();

    const handleLogout = () => {
        googleLogout();
        localStorage.removeItem('user');
        setUser(null);
       navigate('/login');
        console.log('User logged out');
      };

  return (
    <div className={`sidebar ${sidebar? "" : "small-sidebar"}`}>
<div className="shortcut-links" >
    <div className={`side-link ${category===0? "active" : ""}`} onClick={()=>setCategory(0)}>
        <img src={homeIcon} alt="" /><p>Home</p>
    </div>
    <div className={`side-link ${category===20? "active" : ""}`}onClick={()=>setCategory(20)}>
        <img src={gameIcon} alt="" /><p>Gaming</p>
    </div>
    <div className={`side-link ${category===2? "active" : ""}`}onClick={()=>setCategory(2)}>
        <img src={autoIcon} alt="" /><p>Automobiles</p>
    </div>
    <div className={`side-link ${category===17? "active" : ""}`}onClick={()=>setCategory(17)}>
        <img src={sportsIcon} alt="" /><p>Sports</p>
    </div>
    <div className={`side-link ${category===24? "active" : ""}`}onClick={()=>setCategory(24)}>
        <img src={entertainIcon} alt="" /><p>Entertainment</p>
    </div>
    <div className={`side-link ${category===28? "active" : ""}`}onClick={()=>setCategory(28)}>
        <img src={techIcon} alt="" /><p>Technology</p>
    </div>
    <div className={`side-link ${category===10? "active" : ""}`}onClick={()=>setCategory(10)}>
        <img src={musicIcon} alt="" /><p>Music</p>
    </div>
    <div className={`side-link ${category===22? "active" : ""}`}onClick={()=>setCategory(22)}>
        <img src={blogIcon} alt="" /><p>Blogs</p>
    </div>
    <div className={`side-link ${category===25? "active" : ""}`}onClick={()=>setCategory(25)}>
        <img src={newsIcon} alt="" /><p>News</p>
    </div>
    <hr />
</div>

<div className="subscribe-list">
    <h3>Subscriptions</h3>

    <div className='side-link'>
        <img src={user} alt="" /><p>coming soon</p>
    </div>
    <div className='side-link'>
        <img src={user} alt="" /><p>coming soon</p>
    </div>
    <div className='side-link'>
        <img src={user} alt="" /><p>comming soon</p>
    </div>
    <div className='side-link'>
        <img src={user} alt="" /><p>coming soon</p>
    </div>
    <hr />
</div>
<div className="logout-link">
   <div className='side-link'>
        <img src={loginIcon} alt="" /><p onClick={handleLogout}>Logout</p>
    </div>
   </div>
    </div>
  )
}

export default SideBar