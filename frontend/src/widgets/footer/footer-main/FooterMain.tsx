import { ListSection } from './list-section';
import { ListItem } from './list-item';
import { Button, Icon, Input } from '@/shared/ui';

export const FooterMain = () => {
  return (
    <div className="mt-16 grid grid-cols-1 gap-12 border-t border-gray-100 pt-16 md:grid-cols-4 lg:grid-cols-5">
      <ListSection title="Компания">
        <ListItem href="#">История фирмы</ListItem>
        <ListItem href="#">Новости</ListItem>
        <ListItem href="#">Политика конфиденциальности</ListItem>
        <ListItem href="#">Персональные данные</ListItem>
        <ListItem href="#">Правила пользования сайта</ListItem>
      </ListSection>
      <ListSection title="Помощь">
        <ListItem href="#">FAQs</ListItem>
        <ListItem href="#">Обратная связь</ListItem>
      </ListSection>
      <ListSection title="Контакты">
        <ListItem className="text-2xl" href="#">
          8 800 555 35 35
        </ListItem>
        <div className="flex flex-row gap-2">
          <Icon icon={'telegram'} size={30} />
          <Icon icon={'whatsapp'} size={30} />
        </div>
      </ListSection>

      <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
        <p className="text-lg font-medium text-gray-900">
          Хотите получать скидки первым?
        </p>
        <div className="mx-auto mt-4 max-w-md sm:ms-0">
          <form className="mt-4">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
              <Input
                className="input input-accent w-full px-6 py-3 shadow-sm"
                type="email"
                placeholder="Введите свой E-mail"
              ></Input>
              <Button size="responsive" type="submit" variant={'accent'}>
                Подписаться
              </Button>
              <p className="text-center text-xs text-gray-500 sm:text-left">
                Нажимая «Подписаться» вы соглашаетесь c пользовательским
                соглашением и политикой конфиденциальности
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
