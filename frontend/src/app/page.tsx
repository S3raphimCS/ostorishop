import { Banner } from '@/entities';
import { Range } from '@/shared/ui';
import { ProductCategory } from '@/widgets/product-category';
import { Carousel } from '@/shared/ui';
import { Card } from '@/entities';
const images = [
  'kross3.png',
  '/kross3.png',
  '/kross3.png',
  'kross3.png',
  '/kross3.png',
  '/kross3.png',
  'kross3.png',
  '/kross3.png',
  '/kross3.png',
  'kross3.png',
  '/kross3.png',
  '/kross3.png',
];
const alts = [
  'Alt 1',
  'Alt 2',
  'Alt 3',
  'Alt 1',
  'Alt 2',
  'Alt 3',
  'Alt 1',
  'Alt 2',
  'Alt 3',
  'Alt 1',
  'Alt 2',
  'Alt 3',
];
const title = [
  'Title1',
  'Title2',
  'Title3',
  'Title4',
  'Title5',
  'Title6',
  'Title7',
  'Title8',
  'Title9',
  'Title10',
  'Title11',
  'Title12',
];
const description = [
  'Кроссовки',
  'Кроссовки',
  'Кроссовки',
  'Кроссовки',
  'Кроссовки',
  'Кроссовки',
  'Кроссовки',
  'Кроссовки',
  'Кроссовки',
  'Кроссовки',
  'Кроссовки',
  'Кроссовки',
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
export default function Home() {
  return (
    <main>
      <Banner />
      <ProductCategory title={'Подобрано для вас'}>
        <Carousel responsive={responsive} id={'dd'}>
          {images.map((imageUrl, index) => (
            <Card
              key={index}
              imageUrl={imageUrl}
              alt={alts[index]}
              title={title[index]}
              description={description[index]}
            />
          ))}
        </Carousel>
      </ProductCategory>
    </main>
  );
}
