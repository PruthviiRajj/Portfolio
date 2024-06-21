import React from 'react'

const Header = () => {
  return (
   <div className='row'>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#4FFFB0'}}>
            <div className="container-fluid">
                <a className="navbar-brand fw-bold ms-4" href="#">Portfolio</a>
                <a href="https://github.com/PruthviiRajj" className='me-2'><button className='btn btn-outline-light fw-bold'>GitHub</button></a>
            </div>
        </nav>
   </div>
  )
}

export default Header