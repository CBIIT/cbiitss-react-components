import React from 'react';
import './navbar.scss';

export function Navbar({ links, onClick }) {
  return (
    <div className="bg-dark text-white shadow-sm">
      <div className="px-0">
        <div className="ml-3">
          {links.map(({ href, title, active }, index) => (
              <div
                data-testid="Navbar"
                className="d-inline-block"
                key={title}>
                <a
                  data-testid={`Navbar-NavLink-${index}`}
                  // key={title}
                  className={`navlinks py-2 px-4 d-inline-block ${active ? 'active-navlinks' : ''}`}
                  href={href}
                  onClick={e => onClick && onClick(href)}>
                  {title}
                </a>
                <div className="d-lg-none w-100"></div>
              </div>
            ))}
          {/* <pre>{JSON.stringify(links)}</pre> */}
        </div>
      </div>
    </div>
  );
}
