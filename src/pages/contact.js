import React from 'react';
import { Link } from "gatsby";
import Header from '../components/header';

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Header headerContext="Contact" />
    <p>Send us a message!</p>
  </div>
);