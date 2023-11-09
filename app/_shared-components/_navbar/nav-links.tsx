'use client'

import {
  UserGroupIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { useSession, signIn, signOut } from "next-auth/react"


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Home', href: '/', icon: HomeIcon },
    {
        name: 'Community',
        href: '/error',
        icon: UserGroupIcon,
    },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
      <ul className="space-x-2 md:h-auto md:flex gap-8">
      {links.map((link) => {
          const LinkIcon = link.icon;
          return (
              <Link
              key={link.name}
              href={link.href}
              className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-[#164E63] md:flex-none md:justify-start md:p-2 md:px-3 ${pathname === link.href ? 'text-[#F3A549]' : ''}`}
                    >
            <LinkIcon className="w-6" />
            <p className="md:block">{link.name}</p>
            {/* <p className="hidden md:block">{link.name}</p> */}
          </Link>
        );
    })}
    </ul>
  );
}