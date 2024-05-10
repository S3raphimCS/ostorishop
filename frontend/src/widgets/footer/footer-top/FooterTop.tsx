import { Logo } from '@/entities/logo';

export const FooterTop = () => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start">
        <Logo />
      </div>

      <p className="mt-4 max-w-md text-center leading-relaxed text-gray-500 sm:text-left lg:mt-0">
        Текст №1
      </p>
    </div>
  );
};
