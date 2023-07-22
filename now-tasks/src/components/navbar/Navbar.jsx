import {React, useEffect, useState } from 'react'
import {Link, useLocation} from "react-router-dom"


import "./Navbar.scss"




const navbar = () => {

  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const {pathname} = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive)
    return () => {
      window.removeEventListener("scroll", isActive)
    }
  }, [])

  const currentUser = {
     id:1,
     username:"John Doe",
     isSeller:true
  }
  

  return (
    <div className={ (active || pathname != "/") ? "navbar active" : 'navbar'}>
        <div className="container">
          <div className="logo">
            <Link to="/" className='link'>
              <span className="text">fiverr</span>
            </Link>
            
            <span className="dot">.</span>
          </div>
          <div className="links">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign in</span>
            {!currentUser?.isSeller && <span>Become a Seller</span>}
            {!currentUser && <button>Join</button>}
            {
              currentUser && (
                <div className="user" onClick={() => setOpen(!open)}>
                  <img src="" alt="" />
                  <span>{currentUser?.username}</span>
                  {
                    open && (
                      <div className="options">
                        {
                          currentUser?.isSeller && (
                            <>
                              <Link to="/mygigs" className='link'>Gigs</Link>
                              <Link to="/add" className='link'>Add New Gigs</Link>
                            </>
                          )
                        }
                        <Link to="/orders" className='link'>Orders</Link>
                        <Link to="/messages" className='link'>Messages</Link>
                        <Link to="/" className='link'>Logout</Link>
                      </div>
                    )
                      
                  }
                </div>
              )
            }
          </div>
          
        
        </div>
        {
          (active || pathname != "/") && (
            <>
              <hr />
              <div className="menu">
                <Link to="/" className='link'>
                  Graphic & Design
                </Link>
                <Link to="/" className='link'>
                  Video & Animation
                </Link>
                <Link to="/" className='link'>
                  Writing & Translation
                </Link>
                <Link to="/" className='link'>
                  AI Service
                </Link>
                <Link to="/" className='link'>
                  Digital Marketing
                </Link>
                <Link to="/" className='link'>
                  Music & Audio
                </Link>
                <Link to="/" className='link'>
                  Programmig & Tech
                </Link>
                <Link to="/" className='link'>
                  Business
                </Link>
                <Link to="/" className='link'>
                  Lifestyle
                </Link>
              </div>
            </>
          )
         
        }
       
    </div>
  )
}

export default navbar