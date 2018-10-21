import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Link to='/tab1/'>Tab1</Link>
    <Link to='/tab2/'>Tab2</Link>
  </div>
);

export default Navbar;