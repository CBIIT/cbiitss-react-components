import React from 'react';
import { Navbar as BoostrapNavbar, Nav } from 'react-bootstrap';
import './navbar.scss';

function DefaultRenderer({index, href, title, active, onClick}) {
  return <a
    className={`nav-link text-white px-3 text-uppercase ${active ? 'active' : ''}`}
    href={href}
    onClick={e => onClick && onClick(href)}>
    {title}
  </a>
}
export function Navbar(props) {
  const { links, onClick, renderer, innerClassName} = props;

  return <BoostrapNavbar variant="dark" className="bg-primary py-0" {...props}>
    <div className={innerClassName || "container-fluid"}>
        <Nav className="mr-auto">
            {links.map((link, index) => (renderer || DefaultRenderer)({...link, index, onClick}))}
        </Nav>
    </div>
  </BoostrapNavbar>
}
