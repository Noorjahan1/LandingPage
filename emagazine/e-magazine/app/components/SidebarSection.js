// app/components/SidebarSection.js
import Link from 'next/link';

export default function SidebarSection({ title, items }) {
  return (
    <div className="p-6 bg-slate-50 border border-gray-200 rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-5 pb-2 border-b border-gray-300">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.name}>
            <Link href={item.href} legacyBehavior>
              <a className="text-gray-700 hover:text-blue-600 hover:underline transition-colors text-sm">
                {item.name}
                {item.count && <span className="text-xs text-gray-400 ml-1">({item.count})</span>}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
