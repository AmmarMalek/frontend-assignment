import React from 'react';

function login(props) {
    return (
        <>
          <div className="form">
              <div className="login">
                  <h1>Login</h1>
                  <br />
                <form>
                  <label>Gmail Id:</label>
                  <br />
                  <input type="text" />
                  <br />
                  <br />
                  <label>Password:</label>
                  <br />
                  <input type="text" />
                  <br />
                  <br />
                  <button className='btn'>Login</button>
                </form>
              </div>
          </div> 
        </>
    );
}

export default login;