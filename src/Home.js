import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div className="body">
      <div className="zion logo">
        <div className="row logo">
          <div className="col-sm-4 "></div>
          <div className="col-sm-4">
            <img className="icon" src="images/1.gif" alt="logo" />
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>

      <br />
      <br />
      <div className="welcome">
        <h1>
          <strong>Welcome to Mt. Zion Methoidst Church</strong>
        </h1>{" "}
      </div>
      <br />
      <br />
      <br />
      <div className="service">
        <h3>
          <strong>Kindly select your service </strong>
        </h3>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="new">
        <a href="Type.html">
          <button className="first">
            <h3>
              <strong>1st Service</strong>{" "}
            </h3>{" "}
          </button>{" "}
        </a>
        <br />
        <br />
        <br />
        <br />
        <a href="Type.html">
          <button type="button" href="Type.html" className="first">
            <h3>
              <strong>2nd Service</strong>
            </h3>{" "}
          </button>
        </a>
      </div>
    </div>
    )
  }
}


