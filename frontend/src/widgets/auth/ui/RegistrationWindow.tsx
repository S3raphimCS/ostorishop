'use client';
import { paths } from '@/shared/routing';
import { useState } from 'react';
import { Button, Input } from '@/shared/ui';
import Link from 'next/link';
import { UserRegister } from '@/shared/model/Api';
import { registerUser } from '../api';

interface RegistrationWindowProps {
  onShowLogin: () => void;
}

export const RegistrationWindow: React.FC<RegistrationWindowProps> = ({
  onShowLogin,
}) => {
  const [formData, setFormData] = useState<UserRegister>({
    first_name: '',
    last_name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await registerUser(formData);
      console.log('Registration successful:', data);
    } catch (error: any) {
      console.error('Registration error:', error);
    }
  };

  return (
    <section className="bg-white">
      <div className="mx-auto flex flex-col justify-center lg:py-0">
        <section className="relative mx-0 flex bg-gray-900 py-0">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />
          <div className="relative block p-12">
            <h2 className="text-2xl font-bold tracking-wider text-white sm:text-3xl md:text-4xl">
              ВХОД ИЛИ РЕГИСТРАЦИЯ
            </h2>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 pb-6 lg:col-span-7 lg:px-14 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <form
              className="mt-5 grid grid-cols-6 gap-6"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Имя
                </label>
                <Input
                  className="input input-sm input-accent mt-1 w-full rounded-md border-2 border-gray-400 bg-white px-2 text-sm text-gray-700 shadow-sm"
                  id="FirstName"
                  name="first_name"
                  type="text"
                  value={formData.first_name}
                  onChange={handleChange}
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
                  className="input input-sm input-accent mt-1 w-full rounded-md border-2 border-gray-400 bg-white px-2 text-sm text-gray-700 shadow-sm"
                  id="LastName"
                  name="last_name"
                  type="text"
                  value={formData.last_name}
                  onChange={handleChange}
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
                  className="input input-sm input-accent mt-1 w-full rounded-md border-2 border-gray-400 bg-white px-2 text-sm text-gray-700 shadow-sm"
                  id="Email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
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
                  className="input input-sm input-accent mt-1 w-full rounded-md border-2 border-gray-400 bg-white px-2 text-sm text-gray-700 shadow-sm"
                  id="Password"
                  name="password1"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password1}
                  onChange={handleChange}
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
                  className="input input-sm input-accent mt-1 w-full rounded-md border-2 border-gray-400 bg-white px-2 text-sm text-gray-700 shadow-sm"
                  id="PasswordConfirmation"
                  name="password2"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password2}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <Input
                    className="checkbox-accent checkbox size-5 rounded-md border-gray-200 bg-white shadow-sm"
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
                  <Link
                    className="text-gray-700 underline"
                    href={paths.termsAndConditions}
                  >
                    условиями
                  </Link>{' '}
                  и{' '}
                  <Link
                    className="text-gray-700 underline"
                    href={paths.privacyPolicy}
                  >
                    политикой конфиденциальности
                  </Link>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button className="text-white" variant={'secondary'}>
                  Создать аккаунт
                </Button>
                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  У вас уже есть аккаунт?{' '}
                  <span
                    className="cursor-pointer text-gray-700 underline"
                    onClick={onShowLogin}
                  >
                    Авторизоваться
                  </span>
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
