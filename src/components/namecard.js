import React from "react";
import profilePic from "../resources/profile.jpg";

export default () => (
  <div className="namecard">
    <h1>
      Ren Xiang <em>Foo</em>
    </h1>
    <img src={profilePic} alt="profile"></img>
    <h2>
      JavaScript Frontend Developer
      <br />
      Machine Learning Practitioner
    </h2>
  </div>
);
