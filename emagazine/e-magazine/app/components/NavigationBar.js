// app/components/NavigationBar.js
import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/latest', label: 'Latest Articles' },
  { href: '/categories', label: 'Categories' },
  { href: '/archives', label: 'Archives' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function NavigationBar() {
  return (
    <nav className="py-5 mb-10 sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <ul className="flex justify-center space-x-4 md:space-x-8 text-gray-700">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link href={item.href} legacyBehavior>
              <a className="text-sm md:text-base font-medium hover:text-blue-600 transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-blue-500">
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
