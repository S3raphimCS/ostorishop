import Link from 'next/link';
import { combineClasses } from '@/shared/lib/style-worker';

interface ListItemProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

const BASE_CLASSES = 'transition hover:text-gray-100/75';

export const ListItem: React.FC<ListItemProps> = ({
  className,
  href,
  children,
}) => {
  const classes = combineClasses(className, BASE_CLASSES);
  return (
    <li>
      <Link className={classes} href={href}>
        {children}
      </Link>
    </li>
  );
};
