import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        magni optio, omnis maiores veritatis dolorum accusantium nostrum ullam
        eos consequuntur!
      </p>
      <ul>
        <li>
          <Link to="contacts">Contacts</Link>
        </li>
        <li>
          <Link to="team">Team</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default About;
