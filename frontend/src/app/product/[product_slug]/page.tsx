import { ProductOverview } from '@/widgets/product-overview';
import { productDetails } from '@/app-wrapper/types/mocks';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/shared/ui';

export default function ProductViewPage({
  params,
}: {
  params: { product_slug: string };
}) {
  const product = productDetails.find(
    (product) => product.id === params.product_slug
  );

  if (!product) {
    return (
      <div className="flex h-96 items-center sm:mt-14 md:mt-0">
        <div className="container flex flex-col items-center justify-center px-5 text-gray-700 md:flex-row">
          <div className="max-w-md">
            <div className="font-dark text-3xl font-bold">
              Не могу найти такой товар
            </div>
            <p className="mb-8 mt-4 md:text-xl">
              Пожалуйста попробуйте посмотреть другие товары.
            </p>
            <Link href={'/'}>
              <Button className="mb-6" variant={'accent'}>
                Вернуться на главную
              </Button>
            </Link>
          </div>
          <div className="ml-2 max-w-lg">
            <Image
              width={200}
              height={200}
              src="/question.png"
              alt="Пустой список желаемого"
            />
          </div>
        </div>
      </div>
    );
  }

  return <ProductOverview product={product} />;
}
