'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.scss';

const menuItems = [
  { label: 'home.html', route: '/home', icon: 'devicon-html5-plain colored' },
  { label: 'about.ts', route: '/about', icon: 'devicon-typescript-plain colored' },
  { label: 'contact.json', route: '/contact', icon: 'devicon-nodejs-plain colored' },
  { label: 'projects.css', route: '/projects', icon: 'devicon-css3-plain colored' },
  { label: 'now.md', route: '/now', icon: 'pi pi-user' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="code-navbar">
      <ul className="nav-tabs">
        {menuItems.map((item) => (
          <li key={item.route} className="nav-tab">
            <Link
              href={item.route}
              className={`tab-link ${pathname.startsWith(item.route) ? 'active' : ''}`}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
