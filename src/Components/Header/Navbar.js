import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { info } from "../../Info/Info";
import './Navbar.scss';
import icon from '../../Image/icon.png';

const links = [
  {
    name: 'Home',
    to: '/',
    active: 'home'
  },
  {
    name: 'A propos',
    to: '/about',
    active: 'about'
  },
  {
    name: info.initials,
    type: 'initials',
    to: '/',
    active: 'home',
  },
  {
    name: 'Portfolio',
    to: '/portfolio',
    active: 'portfolio'
  },
  {
    name: 'CV',
    to: 'Files/CV.pdf', // Ajoutez le chemin vers votre fichier PDF
    download: 'CV_Alexis_Papon.pdf', // Nom du fichier à télécharger
    type: 'download'
  }
];

export default function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

  return (
    <nav className="navbar">
      <ul className="menu">
        {links.map((link, index) => (
          <li key={index} className={link.active === active && !link.type ? 'active' : ''}>
            {link.type !== 'download' && (
              <Link to={link.to} onClick={() => setActive(link.active)} className="link">
                {!link.type && <p>{link.name}</p>}
                {link.type === 'initials' && <img src={icon} alt="logo" />}
              </Link>
            )}
            {link.type === 'download' && (
              <a href={link.to} download={link.download} className="link">
                {link.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
