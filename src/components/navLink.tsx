'use client';

import { ComponentProps } from 'react';
import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function NavLink({
  href,
  locale,
  ...rest
}: ComponentProps<typeof Link>) {
  const currentLocale = useLocale();
  const isActive = currentLocale === locale;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      locale={locale}
      className={isActive ? "font-bold" : ""}
      scroll={false}
      {...rest}
    />
  );
}