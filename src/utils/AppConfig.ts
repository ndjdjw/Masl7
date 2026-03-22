<div className="mx-auto max-w-screen-md">
    <header className="border-b border-gray-300">
      <div className="pt-16 pb-8 text-right">
        <h1 className="text-3xl font-bold text-gray-900">{AppConfig.title}</h1>
        <p className="text-xl">{AppConfig.description}</p>
      </div>

      <nav aria-label="القائمة الرئيسية" className="mb-4">
        <ul className="flex flex-wrap text-xl justify-end">
          {navItems.map((item) => {
            const isActive = !item.external && pathname === item.href;
            return (
              <li key={item.href} className="mr-6 last:mr-0">
                {item.external ? (
                  <a
                    href={item.href}
                    className="border-none text-gray-700 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className={`border-none hover:text-gray-900 ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-700'}`}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>

    <main className="content py-5 text-xl text-right">{children}</main>

    <footer className="border-t border-gray-300 py-8 text-center text-sm">
      © {new Date().getFullYear()} {AppConfig.site_name}. جميع الحقوق محفوظة.
      <br />
      مدعوم بحب من{' '}
      <a
        href="https://creativedesignsguru.com"
        className="text-gray-700 hover:text-gray-900"
        target="_blank"
        rel="noopener noreferrer"
      >
        CreativeDesignsGuru
      </a>
    </footer>
  </div>
</div>
