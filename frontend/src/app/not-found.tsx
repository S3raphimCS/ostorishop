'use client';
import { Button, Loading } from '@/shared/ui';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen items-center bg-gray-100 sm:mt-14 md:mt-0">
      <div className="container flex flex-col items-center justify-center px-5 text-gray-700 md:flex-row">
        <div className="max-w-md">
          <div className="font-dark text-5xl font-bold">404</div>
          <p className="text-2xl font-light leading-normal tracking-widest md:text-3xl">
            СТРАНИЦА НЕ НАЙДЕНА
          </p>
          <p className="mb-8 mt-4 md:text-xl">
            К сожалению, запрашиваемая вами страница была перемещена или
            удалена, а, возможно, её никогда не было.
          </p>
          <Link href={'/'}>
            <Button className="mb-6" variant={'accent'}>
              Вернуться на главную
            </Button>
          </Link>
        </div>
        <div className="max-w-lg">
          <img
            width={160}
            height={160}
            src="/not-found/NotFoundPerson.png"
            alt="NotFound"
            onLoad={() => {
              return <Loading form="spinner" color="accent" size="md" />;
            }}
          />
        </div>
      </div>
    </div>
  );
}
