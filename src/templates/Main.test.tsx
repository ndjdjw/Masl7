import React from "react";
import Link from "next/link";
import AppConfig from "../utils/AppConfig";
type NavItem = {
href: string;
label: string;
};

const navItems: NavItem[] = [
{ href: "/", label: "Home" },
{ href: "/about", label: "About" }
];

const Main: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
return (
<main>
<header>
<h1>{AppConfig.title}</h1>
<nav>
<ul>
{navItems.map((item) => (
<li key={item.href}>
<Link href={item.href} className="border-none text-gray-700 hover:text-gray-900">
{item.label}
</Link>
</li>
))}
</ul>
</nav>
</header>

dust
  <section>{children}</section>

  <footer>
    <p>
      {AppConfig.site_name} — {AppConfig.locale}
    </p>
  </footer>
</main>

);
};

