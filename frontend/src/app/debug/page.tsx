import { Carousel, Dropdown, Loading } from '@/components/shared/ui';
import { Button } from '@/components/shared/ui/Buttons/Button';

export default function Debug() {
  return (
    <>
      <div className="mx-4 my-4 flex gap-12">
        <Button variant={'success'} size={'large'} outline={true}>
          Debug test 1
        </Button>
        <Button variant={'primary'} size={'small'}>
          Debug test 2
        </Button>
        <Button variant={'secondary'} size={'normal'}>
          Debug test 3
        </Button>
        <Button variant={'delete'} size={'wide'}>
          Debug test 4
        </Button>
        <Button variant={'default'} size={'tiny'}>
          Debug test 5
        </Button>
        <br></br>
        <br></br>
      </div>
      <div className="mx-4 flex gap-6 ">
        <Dropdown
          items={['Кеды', 'Кроссовки']}
          hrefs={['/', '/debug']}
          buttonText={'Для мужчин'}
        />
        <Dropdown
          items={['Кеды', 'Кроссовки', 'Платья', 'Свитеры', 'Водолазки']}
          hrefs={['/', '/debug', '/', '/', '/', '/', '/', '/']}
          buttonText={'Для женщин'}
        />
        <Dropdown
          items={['Часы', 'Очки']}
          hrefs={['/', '/debug']}
          buttonText={'Для аксессуары'}
        />
      </div>
      <div className="mx-8 my-5 flex gap-9">
        <Loading form="spinner" size="lg" color="success"></Loading>
        <Loading form="ball" size="md" color="warning"></Loading>
        <Loading form="bars" size="lg" color="info"></Loading>
        <Loading form="infinity" size="md" color="error"></Loading>
        <Loading form="ring" size="xs" color="accent"></Loading>
      </div>
      <div className="mx-8 flex gap-6">
        <Carousel
          images={['/kross3.png', '/kross2.png', '/kross3.png']}
          alt={['чек', 'чек', 'чек']}
        />
      </div>
    </>
  );
}
