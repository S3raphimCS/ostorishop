'use client';
import { Icon, Button } from '@/shared/ui';
import { combineClasses } from '@/shared/lib';
import AliceCarousel, { Responsive } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

interface CarouselProps {
  readonly children: JSX.Element[] | Element[];
  readonly disableButtonsControls?: boolean;
  readonly autoPlay?: boolean;
  readonly infinite?: boolean;
  readonly animationDuration?: number;
  readonly autoWidth?: boolean;
  readonly mouseTracking?: boolean;
  readonly responsive?: Responsive;
  readonly disableDotsControls?: boolean;
  readonly className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  disableButtonsControls,
  autoWidth,
  autoPlay,
  infinite,
  animationDuration,
  mouseTracking,
  responsive,
  disableDotsControls = true,
  className,
}) => {
  const classes = combineClasses(className);

  const renderNextButton = ({ isDisabled }: { isDisabled: boolean }) => {
    return (
      <Button
        className="absolute right-2 top-1/2 translate-y-1/2"
        variant={'accent'}
        circle
      >
        <Icon icon={'right-arrow'} />
      </Button>
    );
  };

  const renderPrevButton = ({ isDisabled }: { isDisabled: boolean }) => {
    return (
      <Button
        className="absolute left-2 top-1/2 translate-y-1/2"
        variant={'accent'}
        circle
      >
        <Icon icon={'left-arrow'} />
      </Button>
    );
  };

  return (
    <div className={classes}>
      <AliceCarousel
        autoPlay={autoPlay}
        disableButtonsControls={disableButtonsControls}
        infinite={infinite}
        autoWidth={autoWidth}
        animationDuration={animationDuration}
        mouseTracking={mouseTracking}
        responsive={responsive}
        items={children}
        disableDotsControls={disableDotsControls}
        //@ts-ignore
        renderPrevButton={renderPrevButton}
        //@ts-ignore
        renderNextButton={renderNextButton}
      />
    </div>
  );
};
