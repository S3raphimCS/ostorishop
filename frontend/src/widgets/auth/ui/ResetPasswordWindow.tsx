import { Button, Input } from '@/shared/ui';
import { Logo } from '@/entities/logo';

interface ResetPasswordWindowProps {
  onShowRegistration: () => void;
}

export const ResetPasswordWindow: React.FC<ResetPasswordWindowProps> = ({
  onShowRegistration,
}) => {
  return (
    <section className="my-0">
      <div className="mx-auto flex flex-col items-center justify-center lg:py-0">
        <div className="mb-4 flex items-center gap-2 text-2xl font-bold tracking-wide text-base-100">
          <Logo width={48} height={48} />
          OstoriShop
        </div>
        <div className="w-full rounded-lg border border-gray-700 bg-base-100 shadow sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-neutral-content md:text-2xl">
              Восстановление пароля
            </h1>
            <form className="space-y-4 md:space-y-6" method="post" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-neutral-content"
                >
                  Ваша электронная почта
                </label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  className="input input-sm input-accent block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-neutral-content sm:text-sm"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                variant={'accent'}
              >
                Восстановить пароль
              </Button>
              <p className="text-sm font-light text-neutral-content">
                У вас еще нет учетной записи?{' '}
                <span
                  className="font-medium text-accent hover:underline"
                  onClick={onShowRegistration}
                >
                  Зарегистрироваться.
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
