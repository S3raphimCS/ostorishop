import { Input } from '@/shared/ui';
import Link from 'next/link';

export const RegistrationWindow = () => {
  return (
    <section className="bg-white">
      <div>
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="text-2xl font-bold tracking-wider text-white sm:text-3xl md:text-4xl">
              ВХОД ИЛИ РЕГИСТРАЦИЯ
            </h2>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 pb-6 lg:col-span-7 lg:px-14 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <form action="#" className="mt-5 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Имя
                </label>
                <Input
                  className="mt-1 w-full rounded-md border-2 border-gray-400 bg-white px-2 text-sm text-gray-700 shadow-sm"
                  id="FirstName"
                  name="first_name"
                  type="text"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="LastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Фамилия
                </label>
                <Input
                  className="mt-1 w-full rounded-md border-2 border-gray-400 bg-white px-2 text-sm text-gray-700 shadow-sm"
                  id="LastName"
                  name="last_name"
                  type="text"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Электронная почта
                </label>
                <Input
                  className="mt-1 w-full rounded-md border-2 border-gray-400 bg-white px-2 text-sm text-gray-700 shadow-sm"
                  id="Email"
                  name="email"
                  type="email"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Пароль
                </label>
                <Input
                  className="mt-1 w-full rounded-md border-2 border-gray-400 bg-white px-2 text-sm text-gray-700 shadow-sm"
                  id="Password"
                  name="password"
                  type="password"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Подтверждение пароля
                </label>
                <Input
                  className="mt-1 w-full rounded-md border-2 border-gray-400 bg-white px-2 text-sm text-gray-700 shadow-sm"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  type="password"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <Input
                    className="checkbox-primary checkbox size-5 rounded-md border-gray-200 bg-white shadow-sm"
                    id="MarketingAccept"
                    name="marketing_accept"
                    type="checkbox"
                  />
                  <span className="text-sm text-gray-700">
                    Я хочу получать электронные письма о мероприятиях,
                    обновлениях продуктов и других объявлениях компании.
                  </span>
                </label>
              </div>
              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  Создавая учетную запись, вы соглашаетесь с нашими{' '}
                  <Link className="text-gray-700 underline" href={'#'}>
                    условиями
                  </Link>{' '}
                  и{' '}
                  <Link className="text-gray-700 underline" href={'#'}>
                    политикой конфиденциальности
                  </Link>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Создать аккаунт
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  У вас уже есть аккаунт?{' '}
                  <Link className="text-gray-700 underline" href={'#'}>
                    Авторизоваться
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};
