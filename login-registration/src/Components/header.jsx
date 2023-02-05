import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Registration from './registration'
import Login from './login'

function header(props) {
    const Menu = {'/registration':'Registration','/login':'Login'}
    const returnData = Object.entries(Menu).map((res,i)=>{
        return <li className="nav-item" key={i}>
          <Link className="nav-link active" aria-current="page" to={res[0]}>{res[1]}</Link>
        </li>
    })
    return (
        <>
        <Router>
        
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {returnData}
      </ul>
    </div>
  </div>
</nav>  


<Routes>
    <Route path='/registration' element={<Registration />}/>
    <Route path='/login' element={<Login />}/>
</Routes>
</Router> 
        </>
    );
}

export default header;