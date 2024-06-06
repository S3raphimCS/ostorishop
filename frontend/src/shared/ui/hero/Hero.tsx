import Image from 'next/image';

interface HeroProps {
  heading: string;
  subheading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const Hero: React.FC<HeroProps> = ({
  heading,
  subheading,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div>
      <section className="mx-auto mt-8 max-w-screen-xl items-center px-4 pb-12 md:px-8 lg:flex">
        <div className="flex-1 space-y-4 sm:text-center lg:text-left">
          <h1 className="text-4xl font-bold text-base-content xl:text-5xl">
            {heading}{' '}
            <span className="bg-gradient-to-r from-[#fa7188] to-[#950729] bg-clip-text text-transparent">
              {subheading}
            </span>
          </h1>
          <p className="max-w-xl leading-relaxed text-base-content sm:mx-auto lg:ml-0">
            {description}
          </p>
        </div>
        <div className="mt-7 flex flex-1 justify-end text-center lg:ml-3 lg:mt-0">
          <Image width={400} height={400} src={imageSrc} alt={imageAlt} />
        </div>
      </section>
    </div>
  );
};
