import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  const navBarItemHoverStatus =
    'hover:text-sky-600 dark:hover:text-sky-600';

  const arrMenuItems = [
    { href: '/about', innerText: 'About' },
    { href: '/skillset', innerText: 'Skillset' },
    { href: '/portfolio', innerText: 'Portfolio' },
    { href: '/certifications', innerText: 'Certifications' },
    { href: '/services', innerText: 'Services' },
    { href: '/testimonials', innerText: 'Testimonials' },
    { href: '/contact', innerText: 'Contact' },
  ];

  return (
    <div className="custom-navbar-menu-wrapper">
      {arrMenuItems.map((item) => {
        return (
          <Link
            key={item.innerText}
            className={navBarItemHoverStatus}
            href={item.href}
          >
            {item.innerText}
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
