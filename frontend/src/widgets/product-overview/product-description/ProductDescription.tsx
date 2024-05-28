'use client';
import { combineClasses } from '@/shared/lib/style-worker';
import { Icon } from '@/shared/ui';
import { useState } from 'react';

interface ProductDescriptionProps {
  className?: string;
  description: string;
}

const BASE_CLASSES = 'flex cursor-pointer items-center gap-2';

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  className,
  description,
}) => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const classes = combineClasses(BASE_CLASSES, className);

  return (
    <section id="description">
      <div className={classes} onClick={toggleExpanded}>
        <h2 className="text-2xl font-bold">Описание</h2>
        <Icon size={'2rem'} icon={expanded ? 'dropup' : 'dropdown'} />
      </div>

      {expanded && <p className="mt-2">{description}</p>}
    </section>
  );
};
