'use client'

import { HomeIcon, CogIcon,
    BanknotesIcon, DocumentDuplicateIcon,UserGroupIcon,
    DocumentTextIcon,ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this can be stored in a database.
const links = [
    {name: 'Home', href:'/home', icon: HomeIcon},
    {name: 'Contracts', href: '/home/contracts', icon: DocumentDuplicateIcon },
    {name: 'Suppliers', href:'/home/suppliers', icon: UserGroupIcon},
    {name: 'Products', href:'/home/products', icon: ShoppingCartIcon},
    {name: 'LOC', href:'/home/loc', icon: BanknotesIcon},
    {name: 'Deliveries', href:'/home/deliveries', icon: ShoppingBagIcon},
    {name: 'Services', href:'/home/services', icon: CogIcon},
    {name: 'Reports', href:'/home/reports', icon: DocumentTextIcon},
];

export default function NavLinks(){
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                <Link
                    key={link.name}
                    href={link.href}
                    className=
                    {
                        clsx ("flex h-[36px] grow items-center justify-center gap-1 bg-blue-600 p-1 text-sm text-white font-medium hover:bg-black-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3 border-b border-blue-300", 
                        {
                            'text-white bg-gray-950': pathname === link.href,
                        },)
                    }
                >
                    <LinkIcon className="w-6" />
                    <p className="hidden md:block">{link.name}</p>
                </Link>
                );
            })}
        </>
    );

};