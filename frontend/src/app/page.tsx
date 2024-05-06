import { Banner } from '@/entities/banner';
import { ProductCategory } from '@/widgets/product-category';
import { Carousel } from '@/shared/ui';
import { Card } from '@/entities/card';

const images = ['boots2.jpg', 'boots2.jpg', '/boots3.jpg'];
const alts = ['Кроссовки женские Athlex Ice', 'Alt 2', 'Alt 3'];
const title = [
  'Кроссовки женские Athlex Ice',
  'Кроссовки женские Kappa Authentic Run Mesh',
  'Title3',
];
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
                rating={3.4}
                reviewsCount={10}
                price={5425}
                cardPlates={[
                  {
                    variant: 'discount',
                    label: '-20%',
                    discountPrice: 4231,
                  },
                  {
                    variant: 'popular',
                    label: 'Популярное',
                  },
                ]}
              />
            ))}
          </Carousel>
        </ProductCategory>
      </div>
    </main>
  );
}
