'use client';
import { useState } from 'react';
import { Icon, Button } from '@/shared/ui';
import { combineClasses } from '@/shared/lib';
import AliceCarousel, { Responsive } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

interface CarouselProps {
  readonly children: JSX.Element[] | Element[];
  readonly countVisibleElements?: number;
  readonly autoWidth?: boolean;
  readonly mouseTracking?: boolean;
  readonly responsive?: Responsive;
  readonly disableDotsControls?: boolean;
  readonly className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  countVisibleElements = 1,
  autoWidth,
  mouseTracking,
  responsive,
  disableDotsControls,
  className,
}) => {
  const classes = combineClasses(className);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const minActiveIndexElement = 0;
  const maxActiveIndexElement = children?.length
    ? children.length - countVisibleElements
    : 0;

  const isDisabledSlidePrev = activeIndex <= minActiveIndexElement;
  const isDisabledSlideNext = activeIndex >= maxActiveIndexElement;

  const getSlidePrev = () => {
    if (isDisabledSlidePrev) {
      return;
    }
    setActiveIndex(activeIndex - 1);
  };

  const getSlideNext = () => {
    if (isDisabledSlideNext) {
      return;
    }
    setActiveIndex(activeIndex + 1);
  };

  return (
    <div className={classes}>
      <AliceCarousel
        autoWidth={autoWidth}
        mouseTracking={mouseTracking}
        responsive={responsive}
        activeIndex={activeIndex}
        items={children}
        disableButtonsControls
        disableDotsControls={disableDotsControls}
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <Button
          variant={'accent'}
          circle
          onClick={getSlidePrev}
          disabled={isDisabledSlidePrev}
        >
          <Icon icon={'left-arrow'} />
        </Button>
        <Button
          variant={'accent'}
          circle
          onClick={getSlideNext}
          disabled={isDisabledSlideNext}
        >
          <Icon icon={'right-arrow'} />
        </Button>
      </div>
    </div>
  );
};
