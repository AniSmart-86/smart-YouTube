import react, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Navigate, Route, Routes } from 'react-router'
import Home from './Pages/Home/Home'
import Video from './Pages/Videos/Video'
import Login from './Components/GoogleAuth/Login'




function App() {
  const [user, setUser] = useState(null);
 const [ sidebar, setSidebar] = useState(true);



useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser) {
    setUser(storedUser);
  }
}, [user]);

  return (
  <div>
    
    <Navbar setSidebar={setSidebar} user={user}/>
   
    <Routes>
      <Route path='/' element={ <Home sidebar={sidebar} setUser={setUser}/> } />
      <Route path='/login' element={ user? <Navigate to="/"/> : <Login setUser={setUser}/> } />
      <Route path='/video/:categoryId/:videoId' element={<Video/> } />
    </Routes>
  </div>
  )
}

export default App
