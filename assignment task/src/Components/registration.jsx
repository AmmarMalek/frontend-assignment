import React from 'react';

function registration(props) {
    return (
        <>
          <div className="form">
              <div className="login">
                  <h1>Registration</h1>
                  <br />
                <form>
                  <label>Name:</label>
                  <br />
                  <input type="text" />
                  <br />
                  <br />
                  <label>Gmail:</label>
                  <br />
                  <input type="text" />
                  <br />
                  <br />
                  <label>Mobile Number:</label>
                  <br />
                  <input type="text" />
                  <br />
                  <br />
                  <label>Password:</label>
                  <br />
                  <input type="text" />
                  <br />
                  <br />
                  <button className='btn'>Submit</button>
                </form>
              </div>
          </div> 
        </>
    );
}

export default registration;