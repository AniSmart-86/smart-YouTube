import React, { useState } from 'react'
import './Home.css'
import SideBar from '../../Components/Sidebar/SideBar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar, setUser, setSidebar}) => {

  const [category, setCategory] = useState(0); 
  return (
    <>
      <SideBar sidebar={sidebar} setSidebar={setSidebar} category={category} setCategory={setCategory} setUser={setUser}/>
      <div className={`container ${sidebar? "" : "large-container"}`}>
        <Feed category={category}/>
      </div>
    </>
  )
}

export default Home