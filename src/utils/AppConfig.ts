<div className="mx-auto max-w-screen-md">
    <header className="border-b border-gray-300">
      <div className="flex items-center justify-between gap-4 pt-8 pb-4">
        <div className="flex items-center gap-4">
          {AppConfig.logo ? (
            // إذا كان شعار SVG مستورد كـ React component قد تحتاج لاستيراده مباشرة بدلاً من الـ <img>
            <img src={AppConfig.logo} alt={`${AppConfig.site_name} logo`} className="h-10 w-10 object-contain" />
          ) : null}
          <div className={`${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
            <h1 className="text-2xl font-bold text-gray-900">{AppConfig.title}</h1>
            <p className="text-sm text-gray-600">{AppConfig.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* زر تبديل اللغة / الاتجاه */}
          <button
            onClick={toggleDir}
            aria-label="تبديل اتجاه الموقع / اللغة"
            className="rounded bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
            title={dir === 'rtl' ? 'Switch to LTR' : 'التبديل إلى RTL'}
          >
            {dir === 'rtl' ? 'ع' : 'EN'}
          </button>

          {/* زر الهامبرغر للهواتف */}
          <button
            onClick={toggleMobile}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="inline-flex items-center rounded bg-gray-100 p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 md:hidden"
          >
            <span className="sr-only">فتح/إغلاق القائمة</span>
            {/* أيقونة بسيطة */}
            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* القائمة العريضة (تختفي على الشاشات الصغيرة) */}
          <nav aria-label="القائمة الرئيسية" className="hidden md:block">
            <ul className={`flex items-center gap-6 text-lg ${dir === 'rtl' ? 'justify-end' : 'justify-start'}`}>
              {navItems.map((item) => {
                const isActive = !item.external && pathname === item.href;
                return (
                  <li key={item.href}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={`hover:text-gray-900 ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-700'}`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* القائمة على الموبايل */}
      {mobileOpen && (
        <div id="mobile-nav" className="md:hidden border-t border-gray-200 py-3">
          <ul className="flex flex-col gap-2 px-2 text-lg">
            {navItems.map((item) => {
              const isActive = !item.external && pathname === item.href;
              return (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={closeMobile}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} onClick={closeMobile} className={`block rounded px-3 py-2 ${isActive ? 'bg-gray-100 font-semibold' : 'hover:bg-gray-50 text-gray-700'}`} aria-current={isActive ? 'page' : undefined}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>

    <main className="content py-6 text-base" onClick={closeMobile}>
      {children}
    </main>

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
