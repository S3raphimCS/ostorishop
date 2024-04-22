import { Icon } from '@/shared/ui';
import { paths } from '@/shared/routing';
import Link from 'next/link';

export const Profile = () => {
  return (
    <div className="flex flex-col items-center">
      <Icon icon={'profile'} color="white" />
      <span className="text-sm">Профиль</span>
    </div>
  );
};
