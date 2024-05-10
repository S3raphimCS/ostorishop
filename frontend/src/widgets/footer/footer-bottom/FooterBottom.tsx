import { Icon } from '@/shared/ui';
import Link from 'next/link';

export const FooterBottom = () => {
  return (
    <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
      <p className="text-center text-xs text-gray-500 sm:text-left">
        &copy; 2024 Компания ООО "OstoriShop". Администрация Сайта не несет
        ответственности за размещаемые Пользователями материалы (в т.ч.
        информацию и изображения), их содержание и качество. <br />
        На информационном ресурсе применяются рекомендательные технологии
        (информационные технологии предоставления информации на основе сбора,
        систематизации и анализа сведений, относящихся к предпочтениям
        пользователей сети «Интернет», находящихся на территории Российской
        Федерации)
      </p>
      <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
        <li>
          <Link href={''}>
            <Icon icon={'vkontakte'} color="teal" />
          </Link>
        </li>
        <li>
          <Link href={''}>
            <Icon icon={'instagram'} color="teal" />
          </Link>
        </li>
        <li>
          <Link href={''}>
            <Icon icon={'youtube'} color="teal" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
