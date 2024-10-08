import React from 'react'
import PropTypes from 'prop-types'  // imported prop types by writing impt '
// import { Link } from 'react-router-dom'


const NavB =  (props)=> {
  return (
    <>
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> {/* $ helps to use variables ( ` <- this is required to use)*/}
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">{props.title}</Link>        using props */}
          <a className="navbar-brand" href="#">{props.title}</a>        {/*using props*/}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutOp}</Link>   {/* using props 
              </li> */}
              
            </ul>

            <div className={`form-check form-switch mx-3 text-${props.mode === 'light'?'dark':'light'}`}>
                  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-danger" type="submit">Search</button>
            </form>
            
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavB;
// pts = Proptypes.string , we use the below as so in future we donot get any errors while sending something
NavB.propTypes={title: PropTypes.string,      //Now we cannot send number , etc... as its set to String 
                aboutOp: PropTypes.string.isRequired,
};

//Default prop is used when do not pass anything in the <Navbar> tag in App.js
// NavB.defaultProps={title: "Default title",       
//                    aboutOp: "Default about",
// };
