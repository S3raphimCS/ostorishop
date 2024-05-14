import Link from 'next/link';
import { DropdownProps } from './Dropdown';

interface DropdownMenuProps extends DropdownProps {
  items: string[];
  hrefs?: string[];
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  background = 'bg-base-200',
  items = [],
  hrefs = [],
}) => {
  return (
    <ul
      tabIndex={0}
      className={`menu dropdown-content z-[1] w-full rounded-box text-white sm:w-52 md:w-64 ${background} p-2 shadow`}
    >
      {items.map((item, index) => (
        <li key={index}>
          {hrefs && hrefs[index] ? (
            <Link href={hrefs[index]}>{item}</Link>
          ) : (
            <span>{item}</span>
          )}
        </li>
      ))}
    </ul>
  );
};
