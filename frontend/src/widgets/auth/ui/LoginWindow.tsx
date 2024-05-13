import { Button, Input } from '@/shared/ui';
import { Logo } from '@/entities/logo';
import Link from 'next/link';
import { paths } from '@/shared/routing';

export const LoginWindow = () => {
  return (
    <section className="my-0">
      <div className="mx-auto flex flex-col items-center justify-center lg:py-0">
        <div className="mb-4 flex items-center gap-2 text-2xl font-bold tracking-wide text-base-100">
          <Logo width={48} height={48} />
          OstoriShop
        </div>
        <div className="w-full rounded-lg border border-gray-700 bg-base-100 shadow sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-tdark text-xl font-bold leading-tight tracking-tight md:text-2xl">
              Войти в свой аккаунт
            </h1>
            <form className="space-y-4 md:space-y-6" method="post" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="text-tdark mb-2 block text-sm font-medium"
                >
                  Ваша электронная почта
                </label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  className="text-tdark input input-sm input-accent block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 sm:text-sm"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-tdark mb-2 block text-sm font-medium"
                >
                  Пароль
                </label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="text-tdark input input-sm input-accent block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 sm:text-sm"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <Input
                      className="checkbox-accent checkbox checkbox-sm"
                      type="checkbox"
                      id="remember"
                      aria-describedby="remember"
                    />
                  </div>
                  <div className="ml-2 text-sm">
                    <label htmlFor="remember" className="text-tdark">
                      Запомнить меня
                    </label>
                  </div>
                </div>
                <Link
                  className="text-sm font-medium text-accent hover:underline"
                  href={'/'}
                >
                  Забыли пароль?
                </Link>
              </div>
              <Button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                variant={'accent'}
              >
                Войти
              </Button>
              <p className="text-tdark text-sm font-light">
                У вас еще нет учетной записи?{' '}
                <Link
                  href="#"
                  className="font-medium text-accent hover:underline"
                >
                  Зарегистрироваться.
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
