'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CookieSvg } from './CookieSvg';

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setShowBanner(false);
  };

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent === 'all' || cookieConsent === 'necessary') {
      setShowBanner(false);
    }
  }, []);

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 end-0 z-[60] mx-auto w-full p-6 sm:max-w-xl">
      <div className="rounded-xl border border-accent bg-white p-4 shadow-sm">
        <div className="flex gap-x-5">
          <CookieSvg />
          <div className="grow">
            <h2 className="text-lg font-semibold text-gray-800">
              Мы используем файлы cookie чтобы обеспечить наилучшую работу сайта
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Нажимая «Разрешить все», вы соглашаетесь на использование всех
              файлов cookie. Посетите нашу{' '}
              <Link
                className="inline-flex items-center gap-x-1.5 font-medium text-accent decoration-2 hover:underline"
                href="/help/privacy-policy"
              >
                Политику в отношении файлов cookie,
              </Link>{' '}
              чтобы узнать больше информации.
            </p>
            <div className="mt-5 inline-flex gap-x-2">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
              >
                Разрешить всё
              </button>
              <button
                type="button"
                onClick={handleAcceptNecessary}
                className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
              >
                Использовать необходимое
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
