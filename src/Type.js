import React, { Component } from 'react'

export default class Type extends Component {
    render() {
        return (
            <div>
                <div class="zion logo">
        <div class="row logo">
          <div class="col-sm-4 "></div>
          <div class="col-sm-4">
            <img class="icon" src="images/1.gif" alt="logo" />
          </div>
          <div class="col-sm-4"></div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div class="welcome">
        <h1>
          <strong>Kindly select if Member or Visitor</strong>
        </h1>{" "}
      </div>
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />

      <a href="Member.html">
        <button type="button" href="" class="first">
          <h3>
            <strong>Member</strong>{" "}
          </h3>{" "}
        </button>
      </a>
      <br />
      <br />
      <br />
      <br />
      <a href="Visitor.html">
        <button type="button" href="" class="first">
          <h3>
            <strong>Visitor</strong>
          </h3>{" "}
        </button>
      </a>
    </div>
            
        )
    }
}

