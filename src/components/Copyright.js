import React from 'react';
import { Link } from 'gatsby';

const Copyright = ({ children }) => (
  <ul className="copyright">
    <li>&copy; {new Date().getFullYear()} Brian Hamburg. All rights reserved.</li>
    <li><Link to="/uses">Site Info</Link></li>
  </ul>
);

export default Copyright;
