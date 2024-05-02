import { Banner } from '@/entities/banner';
import { ProductCategory } from '@/widgets/product-category';
import { Carousel } from '@/shared/ui';
import { Card } from '@/entities/card';

const images = ['boots2.jpg', 'boots2.jpg', '/boots3.jpg'];
const alts = ['Полный вайб для ваших ног', 'Alt 2', 'Alt 3'];
const title = ['Нереальные кроссовки жестяк', 'Title2', 'Title3'];
const description = ['Кроссовки', 'Кроссовки', 'Кроссовки'];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
export default function Home() {
  return (
    <main>
      <Banner />
      <div className="flex-column flex justify-center">
        <ProductCategory title={'Подобрано для вас'}>
          <Carousel responsive={responsive} id={'dd'}>
            {images.map((imageUrl, index) => (
              <Card
                key={index}
                imageUrl={imageUrl}
                alt={alts[index]}
                title={title[index]}
                description={description[index]}
                rating={5}
                reviewsCount={10}
                price={999}
                cardPlates={[{ variant: 'popular', label: 'Популярное' }]}
              />
            ))}
          </Carousel>
        </ProductCategory>
      </div>
    </main>
  );
}
